const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let items = [
  { id: '1', name: 'Item 1' ,nameId:"app1name",data:{apsk:"djd", sock:"dsdnks",hbjsdbni:"mmm"}},
  { id: '2', name: 'Item 2' ,nameId:"app2name",data:{apsk:"djd", sock:"dsdnks",hbjsdbni:"mmm"}},
  { id: '3', name: 'Item 3' ,nameId:"app3name",data:{apsk:"djd", sock:"dsdnks",hbjsdbni:"mmm"}}
];

// GET all items
app.get('/items', (req, res) => {
  res.json(items);
});

// GET a single item by ID
app.get('/items/:id', (req, res) => {
  const item = items.find(i => i.id === req.params.id);
 res.json(item);
});
// GET a single item by ID
app.get('/itemsByName/:name', (req, res) => {
  const item = items.find(i => i.nameId === req.params.name);
 res.json(item!=null?item.data:item);
});

// POST a new item
app.post('/items', (req, res) => {
  res.status(201).json({})});


app.get('/key', (req, res) => {
  res.status(201).json({ "key": 'c2fbdbb871a69e4c09680b10e776f37ee276f22f9fb60c4acdfde67787e57349' })});

// PUT (update) an existing item
app.put('/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).send('Item not found');

  item.name = req.body.name;
  res.json(item);
});

// DELETE an item
app.delete('/items/:id', (req, res) => {
  items = items.filter(i => i.id !== parseInt(req.params.id));
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});