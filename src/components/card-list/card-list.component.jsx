import { Component } from "react";
import "./card-list.styles.css";
import Card from '../card/card.component.jsx';

import React from 'react'

const CardList = ({ monsters }) => <div className="card-list">
    {monsters.map(monster => {
        const { id, name, email } = monster;
        return <>
            <Card key={monster.id} monster={monster} />
        </>
    })}
</div>;

export default CardList