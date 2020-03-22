import React, { useState } from 'react';
import Header from './Header';
import SkillTable from './SkillTable';
import data from './data/skill.json';

function Skill() {
  const [table, setTable] = useState(data);
  const [active, setActive] = useState('all');
  const [ExperienceAsc, setExperienceAsc] = useState(false);
  const [ScoreAsc, setScoreAsc] = useState(false);

  const handleOnClick = (e) => {
    if (e.target.value === 'all') {
      setTable(data);
    } else {
      setTable(data.filter(x => x.type === e.target.value));
    }
    setActive(e.target.value);
  };

  const handleExperienceSort = (e) => {
    if (ExperienceAsc) {
      setTable(table.sort(function (a, b) {
        if (a.experience < b.experience) return -1;
        if (a.experience > b.experience) return 1;
        return 0;
      }));
    } else {
      setTable(table.sort(function (a, b) {
        if (a.experience > b.experience) return -1;
        if (a.experience < b.experience) return 1;
        return 0;
      }));
    }
    setExperienceAsc(!ExperienceAsc);
  }

  const handleScoreSort = (e) => {
    if (ScoreAsc) {
      setTable(table.sort(function (a, b) {
        if (a.score < b.score) return -1;
        if (a.score > b.score) return 1;
        return 0;
      }));
    } else {
      setTable(table.sort(function (a, b) {
        if (a.score > b.score) return -1;
        if (a.score < b.score) return 1;
        return 0;
      }));
    }
    setScoreAsc(!ScoreAsc);
  }

  return (
    <div className="content content--main">
      <Header color={'dark'} />
      <div className="outer skill__outer">
        <header className="content__header content__header--intro content__header--outer">
          <div className="section-title">
            <h2 className="big-title">What I HAVE</h2>
            <h2 className="main-title">MY SKILL</h2>
            <p className="text-big centered">
              This table shows my skills, experiences, and skill's scores.
            </p>
          </div>
        </header>
        <div className="filter">
          <button onClick={handleOnClick} value="all" className={active === 'all' ? 'active' : ''}>ALL</button>
          <button onClick={handleOnClick} value="language" className={active === 'language' ? 'active' : ''}>Language</button>
          <button onClick={handleOnClick} value="framework" className={active === 'framework' ? 'active' : ''}>FrameWork</button>
          <button onClick={handleOnClick} value="db" className={active === 'db' ? 'active' : ''}>DB</button>
          <button onClick={handleOnClick} value="other" className={active === 'other' ? 'active' : ''}>Others</button>
        </div>
        <SkillTable table={table} handleExperienceSort={handleExperienceSort} handleScoreSort={handleScoreSort} />
      </div>
    </div>
  )
}

export default Skill;