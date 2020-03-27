import React from 'react'
import resume from './data/work.json';

const Resume = () => {
  const Contents = resume.map((data) => {
    const contents = data.contents.map((content) => {
      return (
        <li>{content}</li>
      )
    });
    return (
      <li className="resume_section-content_item">
        <div className="resume_section-content_row">
          <h3 className="resume_section-content_title has-range">
            {data.title}
          </h3>
          <div className="resume_section-content_range">
            {data.from} - {data.to === "" ? "PRESENT" : data.to}
          </div>
          <div className="resume_section-content_subtitle">
            {data.subtitle}
          </div>
        </div>
        <div className="muted">
          <ul>
            {contents}
          </ul>
          <div className="technologies">
            Technologies: {data.technologies.join(',')}
          </div>
        </div>
      </li>

    )
  })

  return (
    <div className="resume_section">
      <div className="resume_section-inner">
        <h2 className="resume_section-title has-default_offset">
          Employment
        </h2>
        <div className="resume_section-content">
          <ul>
            {Contents}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Resume