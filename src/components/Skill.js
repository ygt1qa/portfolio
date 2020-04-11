import React, { useState, useEffect } from "react";
import SkillTable from "./SkillTable";
import data from "./data/skill.json";
import Footer from "./Footer";

function Skill() {
  const [table, setTable] = useState(data);
  const [active, setActive] = useState("all");
  const [ExperienceAsc, setExperienceAsc] = useState(false);
  const [ScoreAsc, setScoreAsc] = useState(false);

  useEffect(() => {
    document.body.classList.add("loading");
    document.body.classList.remove("loaded");
    return () => {
      document.body.classList.add("loaded");
      document.body.classList.remove("loading");
    };
  }, []);

  const handleOnClick = (e) => {
    if (e.target.value === "all") {
      setTable(data);
    } else {
      setTable(data.filter((x) => x.type === e.target.value));
    }
    setActive(e.target.value);
  };

  const handleExperienceSort = (e) => {
    if (ExperienceAsc) {
      setTable(
        table.sort(function (a, b) {
          if (a.experience < b.experience) return -1;
          if (a.experience > b.experience) return 1;
          return 0;
        })
      );
    } else {
      setTable(
        table.sort(function (a, b) {
          if (a.experience > b.experience) return -1;
          if (a.experience < b.experience) return 1;
          return 0;
        })
      );
    }
    setExperienceAsc(!ExperienceAsc);
  };

  const handleScoreSort = (e) => {
    if (ScoreAsc) {
      setTable(
        table.sort(function (a, b) {
          if (a.score < b.score) return -1;
          if (a.score > b.score) return 1;
          return 0;
        })
      );
    } else {
      setTable(
        table.sort(function (a, b) {
          if (a.score > b.score) return -1;
          if (a.score < b.score) return 1;
          return 0;
        })
      );
    }
    setScoreAsc(!ScoreAsc);
  };

  return (
    <div className="content content--main">
      <div className="outer skill__outer">
        <header className="content__header content__header--intro content__header--outer">
          <div className="section-title">
            <h2 className="big-title">What I HAVE</h2>
            <h2 className="main-title">MY SKILL</h2>
          </div>
        </header>
        <div className="filter">
          <button
            onClick={handleOnClick}
            value="all"
            className={active === "all" ? "active" : ""}
          >
            ALL
          </button>
          <button
            onClick={handleOnClick}
            value="language"
            className={active === "language" ? "active" : ""}
          >
            Language
          </button>
          <button
            onClick={handleOnClick}
            value="framework"
            className={active === "framework" ? "active" : ""}
          >
            FrameWork
          </button>
          <button
            onClick={handleOnClick}
            value="db"
            className={active === "db" ? "active" : ""}
          >
            DB
          </button>
          <button
            onClick={handleOnClick}
            value="others"
            className={active === "others" ? "active" : ""}
          >
            Others
          </button>
        </div>
        <SkillTable
          table={table}
          handleExperienceSort={handleExperienceSort}
          handleScoreSort={handleScoreSort}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Skill;
