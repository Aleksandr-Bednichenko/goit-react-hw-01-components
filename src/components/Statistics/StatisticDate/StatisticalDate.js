import React from "react";

import StatisticalTitle from "../StatisticalTitle/StatisticalTitle";
import StatisticsList from "../StatisticsList/StatisticsList";
import style from './StatisticalDate.module.css'

const StatisticalDate = () =>(
<>
<section className={style.container}>
    <p>Задание 2</p>
    <StatisticalTitle
    title="Upload stats"    
    />
    <StatisticsList/>
    </section>
    </>)

export default StatisticalDate;
    