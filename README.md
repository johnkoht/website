# Personal Website

This is the source code for my [personal website](https://www.johnkoht.com). It's a simple Gatsby project.

## Install

To get setup, simple clone and run the setup.

```bash
$ git clone https://github.com/johnkoht/website
$ cd website
$ yarn install
```

## Setup Env
1. Create a `.env.development` file in the root directory
2. Add `API_URL=http://localhost:3100` (assume you're using the API app)

## Development

To start the server, run:

```bash
$ gatsby develop
```

But to run the project, you'll need access to the API, which at this point, is a simple JSON server that runs locally using [json-server](https://github.com/typicode/json-server). I'll have a deployed API at some point in the future.
