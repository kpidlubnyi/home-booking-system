import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import { nanoid } from 'nanoid';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;
app.use(cors());
app.use(bodyParser.json());
const adapter = new JSONFile("db.json");
const db = new Low(adapter, { reviews: [], users: [] });

const JWT_SECRET = process.env.JWT_SECRET;

function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];
    
    if (!token) {
        return res.status(401).json({ error: "No token provided" });
    }
    
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(403).json({ error: "Invalid token" });
    }
}

app.get("/reviews", async (req, res) => {
  await db.read();
  res.json(db.data.reviews);
});

app.post("/reviews", authMiddleware, async (req, res) => {
  const { roomNumber, email, body } = req.body;
  const newReview = {
    id: nanoid(),
    roomNumber,
    email,
    body,
  };
  await db.read();
  db.data.reviews.push(newReview);
  await db.write();
  res.json({ message: "Review added.", review: newReview });
});

app.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  
  if (!username || !password) {
    return res.status(400).json({ 
      message: "Username and password are required" 
    });
  }
  
  await db.read();
  
  const existingUser = db.data.users.find(user => user.username === username);
  if (existingUser) {
    return res.status(400).json({ 
      message: "Username already exists" 
    });
  }
  
  const hashedPassword = bcrypt.hashSync(password, 10);
  
  const newUser = {
    username,
    password: hashedPassword
  };
  
  db.data.users.push(newUser);
  await db.write();
  
  res.json({ 
    message: "User registered successfully",
    username: username
  });
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  
  if (!username || !password) {
    return res.status(400).json({ 
      message: "Username and password are required" 
    });
  }
  
  await db.read();
  
  const user = db.data.users.find(u => u.username === username);
  if (!user) {
    return res.status(401).json({ 
      message: "Invalid username or password" 
    });
  }
  
  const isPasswordValid = bcrypt.compareSync(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ 
      message: "Invalid username or password" 
    });
  }
  
  const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: "2h" });
  res.json({ token });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

app.put("/reviews/:id", authMiddleware, async (req, res) => {
  const { id } = req.params;
  const { email, roomNumber, body } = req.body;
  
  if (!email || !roomNumber || !body) {
    return res.status(400).json({ 
      message: "Email, roomNumber and body are required" 
    });
  }
  
  await db.read();
  
  const reviewIndex = db.data.reviews.findIndex(review => review.id === id);
  
  if (reviewIndex === -1) {
    return res.status(404).json({ 
      message: "Review not found" 
    });
  }
  
  db.data.reviews[reviewIndex] = {
    ...db.data.reviews[reviewIndex],
    email,
    roomNumber: parseInt(roomNumber),
    body
  };
  
  await db.write();
  
  res.json({ 
    message: "The review has been updated", 
    review: db.data.reviews[reviewIndex] 
  });
});

app.delete("/reviews/:id", authMiddleware, async (req, res) => {
    const { id } = req.params;
    
    try {
        await db.read();
        
        const reviewIndex = db.data.reviews.findIndex(review => review.id === id);
        
        if (reviewIndex === -1) {
            return res.status(404).json({ 
                message: "Review not found." 
            });
        }
        
        db.data.reviews.splice(reviewIndex, 1);
        
        await db.write();
        
        res.json({ message: "Review deleted." });
        
    } catch (error) {
        console.error('Error deleting review:', error);
        res.status(500).json({ 
            message: "Internal server error" 
        });
    }
});