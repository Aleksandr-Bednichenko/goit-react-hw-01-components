import React from "react";
import Profile from "./components/Profile/Profile/Profile";
import StatisticalDate from "./components/Statistics/StatisticDate/StatisticalDate";
import FriendsList from "./components/Friends/FriendsList/FriendsList";
import Transactions from "./components/Transactions/Transactions/Transactions";

import user from './user.json'
import  Statistics from './statistical-data.json';
import Friends from './friends.json';
import TransactionsDate from "./transactions.json";

const App = ( ) => {
return <><Profile
src = {user.avatar}        
name = {user.name}
tag = {user.tag}
location = {user.location}
stats = {user.stats}        
/>
<StatisticalDate
title="Upload stats"
stats={Statistics}
/>
<FriendsList
friends = {Friends}
/>
<Transactions
transactions = {TransactionsDate}
/>
</>
}

export default App;