import express from "express";

export default function (connection) {
const router=express.Router();

router.post('/test',(req,res)=> {
  const {
    listName,
    destinationName,
    types,
    purposes,
    vehicles,
    weather,
    temperature
  } =req.body.data;
console.log(listName)
    const query = `
    INSERT INTO list
    (list_name, place_name, place_type, purpose, vehicle, weather, temperature)
    VALUES (?,?,?,?,?,?,?)
  `;
    const values = [
      listName,
      destinationName,
      JSON.stringify(types),
      JSON.stringify(purposes),
      JSON.stringify(vehicles),
      JSON.stringify(weather),
      temperature
    ];

    connection.query(query,values,(err,result) => {
    if (err) {
        console.error("DB insert error",err);
        return res.status(500).json({message:"Error saving data"})
    }
    res.json({message:"Data saved to MySQL!",id:result.insertId})
    });
});
router.get("/list", (req, res) => {
        const query = `
        SELECT * FROM list
  `;
    connection.query(query,(err,result) => {
    if (err) {
        console.error("DB fetch error:",err);
        return res.status(500).json({message:"Error getting data"})
    }
    const formattedResult = result.map(row => ({
  ...row,
  place_type: row.place_type ? JSON.parse(row.place_type) : [],
  purpose: row.purpose ? JSON.parse(row.purpose) : [],
  vehicle: row.vehicle ? JSON.parse(row.vehicle) : [],
  weather: row.weather ? JSON.parse(row.weather) : []
}));

    res.json({data:formattedResult});
    });
});
router.get("/list/:id", (req, res) => {
  const {id}=req.params;
        const query = `
        SELECT * FROM list WHERE id=?
  `;
    connection.query(query,[id],(err,result) => {
    if (err) {
        console.error("DB fetch error:",err);
        return res.status(500).json({message:"Error getting data"});
    }
    if (result.length===0) {
      return res.status(404).json({message:"Item not found"});
    }

    const row = result[0]
const formattedItem = {
  ...row,
  place_type: row.place_type ? JSON.parse(row.place_type) : [],
  purpose: row.purpose ? JSON.parse(row.purpose) : [],
  vehicle: row.vehicle ? JSON.parse(row.vehicle) : [],
  weather: row.weather ? JSON.parse(row.weather) : []
};

    res.json({data:formattedItem});
    });
});
router.put("/update/:id",(req,res)=> {
  const {id}=req.params;
   const {
    listName,
    destinationName,
    types,
    purposes,
    vehicles,
    weather,
    temperature
  } = req.body;
  const query=`
  UPDATE list
  SET list_name=?,place_name=?,place_type=?,purpose=?,vehicle=?,weather=?,temperature=?
  WHERE id=?
  `;
      const values = [
      listName,
      destinationName,
      JSON.stringify(types),
      JSON.stringify(purposes),
      JSON.stringify(vehicles),
      JSON.stringify(weather),
      temperature,
      id
    ];
  connection.query(query,values,(err,result)=>{
if (err) {
  console.error("DB delete error:",err);
  return res.status(500).json({message:"Error updating item"});
}

if (result.affectedROws===0) {
  return res.status(500).json({message:"Item not found"});
}

res.json({message:"Item updated succesfully!",id})
});
})

router.delete("/list/:id",(req,res)=> {
const {id}=req.params;

const query=" DELETE FROM list WHERE id=?";

connection.query(query,[id],(err,result)=>{
if (err) {
  console.error("DB delete error:",err);
  return res.status(500).json({message:"Error deleting item"});
}
if (result.affectedRows===0) {
  return res.status(404).json({message:"Item not found"})
}

res.json({message:"Item deleted succesfully",id})
});
});
return router;
}
