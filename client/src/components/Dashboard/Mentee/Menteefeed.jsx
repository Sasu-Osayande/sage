import React from 'react';
import './Menteefeed.css';
import Dashboard from '../Dashboard';
import Searchbar from '../Searchbar/Searchbar';
import Grid from '../Grid/Grid';
import Quotes from '../Quotes/Quotes';
import Block from '../Block/Block';


export default function Menteefeed() {
  return(
    <div className="menteefeed-wrapper">
    <Searchbar/>
    <Grid />
    <Quotes />
    <Block/>
    <Dashboard/>
    </div>
  )
}