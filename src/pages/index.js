import React from 'react'

const IndexPage = () => (
  <div className="container">
    <div
      style={{
        textAlign: 'center',
        fontFamily: "'Crimson Text', 'Georgia', 'serif'",
        fontStyle: 'italic',
        fontSize: '3.8rem',
        margin: '5rem 0',
        padding: '0 8rem',
        lineHeight: '1.1em',
      }}
    >
      Waipiata Consulting are specialists in health strategy, technology,
      leadership, and professional governance.
    </div>

    <div className="row">
      <div className="six columns">
        <p className="headshot">
          <img alt="Janice Mueller" src="/janice.jpg" />
        </p>
        <h3 className="center">Janice Mueller</h3>
        <p>
          Janice is a registered physiotherapist with over 28 years of
          experience in the physiotherapy profession, allied health and
          executive-level health sector leadership/management and governance
          roles, with extensive relationships and networks nationally and
          internationally.
        </p>
        <p>
          She is able to lead major change management processes within
          organisations, and collaborate across professions and organisations to
          influence and achieve outcomes at local, regional and national levels.
          She can lead and act strategically, form alliances and willing
          coalitions, collaborate, present ideas and engage others in achieving
          goals, objectives and outcomes for your organisation. Janice has an
          extensive breadth and depth of knowledge on the allied health,
          scientific and technical professions working in the New Zealand health
          &amp; disability sector.
        </p>
        <p>
          Janice is the current Chair of the{' '}
          <a target="_blank" href="https://www.physioboard.org.nz/">
            Physiotherapy Board of New Zealand
          </a>{' '}
          and is a member of the{' '}
          <a target="_blank" href="https://www.interrai.co.nz/about/board/">
            InterRAI Governance Board of New Zealand
          </a>
          . She was awarded Life Membership of{' '}
          <a target="_blank" href="https://physiotherapy.org.nz/">
            Physiotherapy New Zealand
          </a>{' '}
          in 2014. She is the Chair of the Membership committee of{' '}
          <a target="_blank" href="http://inptra.org/">
            INPTRA
          </a>{' '}
          and a member of the{' '}
          <a
            target="_blank"
            href="https://www.health.govt.nz/our-work/health-workforce"
          >
            HWNZ
          </a>{' '}
          Allied Health Workforce Advisory Group since 2014.
        </p>
        <p>
          In 2018, Janice was awarded the ‘International Allied Health Award for
          Development’ for ‘an outstanding contribution to advancing allied
          health leadership’ by the network of International Chief Health
          Professions Officers.
        </p>
        <p>
          <a href="mailto:janice@waipiata.com" className="button">
            Email Janice
          </a>
        </p>
      </div>
      <div className="six columns">
        <p className="headshot">
          <img alt="Ian Rowe" src="/ian.jpg" />
        </p>
        <h3 className="center">Ian Rowe</h3>
        <p>
          Ian has over 25 years’ experience in leading and managing change in
          the health sector including health service delivery management at CEO
          level as well as his more extensive IT and Innovation leadership
          roles.
        </p>
        <p>
          He has extensive experience in information technology, working in the
          healthcare, insurance, telecommunications, travel and electricity
          industries. Ian held CIO roles for NZI Insurance Australia and Optical
          Holdings Limited/Visique Limited.
        </p>
        <p>
          With Ian’s leadership of strategy implementation, extensive project
          management and relationship skills, coupled with a detailed technical
          knowledge of IT healthcare solutions and architecture, he has
          delivered all projects he has lead on time and to budget.
        </p>
        <p>
          Ian has strong collaborative and professional relationships with
          clinicians and IT healthcare industry leaders globally, having worked
          on and led large-scale Health IT initiatives in USA, Canada, Spain,
          England, Singapore, Malaysia, United Arab Emirates and Australia.
        </p>
        <p>
          <a href="mailto:ian@waipiata.com" className="button">
            Email Ian
          </a>
        </p>
      </div>
    </div>
  </div>
)

export default IndexPage
