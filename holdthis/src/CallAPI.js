import React, { Component } from 'react';
import './App.css';
const express = require('express');
const request = require('request');


export default class FetchUser extends React.Component {

    state = {
        loading: true,
        person: null
    };

    async componentDidMount() {
        const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/jokes/random', (req, res) => {
    request(
      { url: "https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=33F9D646E02B69B9518A05055E533983&steamids=76561198192236090" },
      (error, response, body) => {
        if (error || response.statusCode !== 200) {
          return res.status(500).json({ type: 'error', message: err.message });
        }
  
        res.json(JSON.parse(body));
      }
    )
  });
  
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`listening on ${PORT}`));

        const url = "https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=33F9D646E02B69B9518A05055E533983&steamids=76561198192236090";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ person: data.results[0], loading: false });
    }

    render() {
        if (this.state.loading){
            return  <div>loading...</div>;
        }

        if (!this.state.person){
            return <div>didn't find the cat</div>;
        }

        return(
            <div>
                <div>{this.state.person.players.steamid}</div>
            </div>
        );
    }

}