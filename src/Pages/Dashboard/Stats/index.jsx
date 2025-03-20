import React , {useContext} from 'react';
import './index.css';
import { MdProductionQuantityLimits } from "react-icons/md";
import { AiOutlineDownload } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CgShoppingBag } from "react-icons/cg";

import {DataContext} from '../ContextApi'


const Stats = () => {

    
    const { leads, leadStats } = useContext(DataContext);


    return (
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">
            <CgShoppingBag size={22} />
          </div>
          <h3>{leads.length}</h3>
          <p>Total Leads</p>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <AiOutlineDownload size={22} />
          </div>
          <h3>{leadStats.total_leads_ordered}</h3>
          <p>Total Downloads</p>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <MdOutlineShoppingCart size={22} />
          </div>
          <h3>{leadStats.total_leads_downloaded}</h3>
          <p>Total Downloads</p>
        </div>
      </div>
    );
}

export default Stats;