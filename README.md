<h1 align="center">Docker Node.js boilerplate</h1>
<p align="center">This is a Docker Compose boilerplate for NodeJS with yarn, based on Alpine Linux image</p>
<p align="center">
  <img width="150" height="150" src="https://raw.githubusercontent.com/docker/compose/master/logo.png" alt="Docker compose logo">&nbsp;
  <img width="150" height="150" src="https://camo.githubusercontent.com/fc61dcbdb7a6e49d3adecc12194b24ab20dfa25b/68747470733a2f2f692e636c6f756475702e636f6d2f7a6659366c4c376546612d3330303078333030302e706e67" alt="Express logo">&nbsp;
  <img width="150" height="150" src="https://user-images.githubusercontent.com/13700/35731649-652807e8-080e-11e8-88fd-1b2f6d553b2d.png" alt="Nodemon logo">
</p>

---

## Into:
This docker Node.js boilerplate is a wrapper of [docker hub image](https://hub.docker.com/_/node/) with pre-installed `yarn, express, nodemon`.

## Installation:
1. Clone repository:
<pre class="command-line">
    <span class="command">git clone https://github.com/EliFuzz/docker-nodejs-nodemon-boilerplate.git</span>
</pre>
2. Go to folder:
<pre class="command-line">
    <span class="command">cd docker-nodejs-nodemon-boilerplate</span>
</pre>
3. Copy and rename `.env_bak` to `.env`:
<pre class="command-line">
    <span class="command">cp .env_bak .env</span>
</pre>
4. Build docker:
<pre class="command-line">
    <span class="command">docker-compose up -d</span>
</pre>
5. Install NPM dependencies (only once):
<pre class="command-line">
    <span class="command">docker-compose exec dev sh -c "yarn"</span>
</pre>
6. Run NPM start script:
<pre class="command-line">
    <span class="command">docker-compose exec dev sh -c "yarn start"</span>
</pre>
7. Exit docker:
<pre class="command-line">
    <span class="command">docker-compose down</span>
</pre>


## Settings:
`.env`:
- NODE_PORT=**3000**
- NODE_ENV=**development**

`docker/dev/Dockerfile`:
- FROM node:**10.9.0-alpine** - you can change node version. Look for reference: [Docker Hub](https://hub.docker.com/_/node/)
