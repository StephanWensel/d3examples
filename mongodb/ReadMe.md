## D3.js with MongoDB

This is a small example to have a D3-based graph that is connected to
a mongoDB database.

- [`grab_anscombe.R`](https://github.com/kbroman/d3examples/blob/master/mongodb/grab_anscombe.R)
  &ndash; an R script to pull the data for
  [Anscombe's quartet](http://www.jstor.org/stable/2682899) from
  [Wikipedia](https://en.wikipedia.org/wiki/Anscombe's_quartet)
- [`anscombe_quartet.json`](https://github.com/kbroman/d3examples/blob/master/mongodb/anscombe_quartet.json)
  &ndash; JSON file with the data
- [`mongo_insert.py`](https://github.com/kbroman/d3examples/blob/master/mongodb/mongo_insert.py)
  &ndash; python script to insert the data into a mongoDB database
  (database `"anscombe"` and collection `"quartet"`)
- [`mongo_request.py`](https://github.com/kbroman/d3examples/blob/master/mongodb/mongo_request.py)
  &ndash; python script setting up local server to handle requests to
  the mongoDB database. Go to `http://localhost:8080/anscombe/I` to
  get the first dataset; then `/II`, `/III`, and `/IV`.
- [`anscombe.coffee`](https://github.com/kbroman/d3examples/blob/master/mongodb/anscombe.coffee)
  &ndash; coffeescript to make the plot; uses the
  [`scatterplot` function](https://github.com/kbroman/d3panels/blob/master/src/scatterplot.coffee)
  in [d3panels](http://kbroman.org/d3panels).

### Things you need

- [mongoDB](https://www.mongodb.org/downloads)
- python modules:
  - [pymongo](http://api.mongodb.org/python/current/)
  - [bottle](http://bottlepy.org/docs/dev/index.html)

### Preparations

- Start the mongoDB daemon, `mongod`.
- Run
  [`mongo_insert.py`](https://github.com/kbroman/d3examples/blob/master/mongodb/mongo_insert.py)
  to insert the data from
  [`anscombe_quartet.json`](https://github.com/kbroman/d3examples/blob/master/mongodb/anscombe_quartet.json)
  into the database.

### Use

- Start the mongoDB daemon, `mongod`.
- Run
  [`mongo_request.py`](https://github.com/kbroman/d3examples/blob/master/mongodb/mongo_request.py)
  to start the database server.
- Open
  [`index.html`](https://github.com/kbroman/d3examples/blob/master/mongodb/index.html)
  in a browser.