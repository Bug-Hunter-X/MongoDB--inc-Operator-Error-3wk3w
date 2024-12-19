```javascript
// Incorrect usage of $inc operator
db.collection('myCollection').updateOne({"_id": ObjectId("651234567890abcdef12345678")}, {"$inc": {"counter": -1}});
```