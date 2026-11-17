// Ishmita Basu · Personal portfolio (no build step, no dependencies)
'use strict';
const projects = [
  {
    id: 'fraud', number: '01', title: 'Making fraud models reproducible',
    eyebrow: 'M.Sc. thesis · MLOps', category: 'mlops', visual: 'fraud', featured: true,
    description: 'A research-first fraud detection pipeline where data leakage, feature consistency, experiment tracking and serving matter as much as predictive performance.',
    status: 'Research in progress', highlight: '5M transactions',
    tags: ['Python', 'LightGBM', 'MLflow', 'Feast', 'FastAPI', 'Docker'],
    github: 'https://github.com/IshmitaBasu/MLOps-Pipeline-for-Fraud-Detection-in-Financial-Data',
    problem: 'Build a fraud-detection research workflow that could be reproduced, inspected and served locally—not just a model trained once in a notebook.',
    approach: [
      'Processed approximately 5 million transactions using leakage-aware train/validation splits and feature preprocessing.',
      'Versioned features with Feast and compared LightGBM experiments with MLflow.',
      'Containerised FastAPI inference and added prediction-contract, CI and batch-monitoring checks.',
      'Documented model limitations and kept the registered model explicitly research-only.'
    ],
    outcome: 'Sender-location history features improved validation Average Precision by 5.69% relative to the control in the reported experiment.',
    note: 'Validation gains are not production performance. Held-out test results were weak, and the model is not represented as deployment-ready.'
  },
  {
    id: 'retail', number: '02', title: 'From retail transactions to decisions',
    eyebrow: 'Analytics engineering · BI', category: 'analytics', visual: 'retail', featured: true,
    description: 'A Delta Lake and dbt-powered retail analytics project, finished with a four-page Power BI view of the business.',
    status: 'Portfolio · synthetic data', highlight: '4-page BI report',
    tags: ['dbt Core', 'Databricks SQL', 'Delta Lake', 'Power BI', 'Python'],
    problem: 'Turn raw, fragmented retail transactions into understandable sales, product, customer and fulfilment KPIs.',
    approach: [
      'Developed an incremental MERGE workflow over Delta Lake tables.',
      'Modeled and tested dimensional marts with dbt Core.',
      'Documented transformation lineage and published a four-page Power BI dashboard.'
    ],
    outcome: 'An end-to-end example of tested analytics models and accessible operational reporting.',
    note: 'Demonstration project using synthetic data. Public repository URL is not yet included in the CV.'
  },
  {
    id: 'energy', number: '03', title: 'Trustworthy metrics for energy subscriptions',
    eyebrow: 'Analytics engineering · Metrics', category: 'analytics', visual: 'energy', featured: true,
    description: 'An energy analytics stack linking consistent dimensional modeling, rigorous testing and a clear self-service metrics layer.',
    status: 'Portfolio · synthetic data', highlight: '123 data tests',
    tags: ['dbt Core', 'BigQuery', 'MetricFlow', 'SQL', 'Metabase'],
    problem: 'Define subscription and revenue metrics consistently across models, rather than letting each dashboard invent its own definitions.',
    approach: [
      'Established explicit grains for dimensional subscription models in BigQuery.',
      'Added 123 data tests and four unit tests in dbt.',
      'Documented MetricFlow definitions for active contracts and recognised revenue.',
      'Built a Metabase dashboard on top of curated marts.'
    ],
    outcome: 'A testable semantic foundation for energy subscription reporting.',
    note: 'Demonstration project using synthetic data. Public repository URL is not yet included in the CV.'
  },
  {
    id: 'swarm', number: '04', title: 'Can small AI agents plan together?',
    eyebrow: 'Multi-agent systems · Research', category: 'ai', visual: 'swarm',
    description: 'A constraint-aware, multi-agent calendar planner using Tree-of-Thought exploration and ACO-inspired branch selection.',
    status: 'Team project · 2025–26', highlight: '40.0% exact match',
    tags: ['SLMs', 'Multi-agent AI', 'Tree-of-Thought', 'ACO', 'Evaluation'],
    github: 'https://github.com/IshmitaBasu/Swarm-Planner-Agent/tree/main/swarm-calendar-planning-final',
    problem: 'Can a team of small language models solve difficult calendar planning constraints better than a single-model baseline?',
    approach: [
      'Co-developed a decentralised agent approach with five-stage Tree-of-Thought planning.',
      'Tested ACO-inspired branch selection to guide candidate exploration.',
      'Evaluated performance on 400 NaturalPlanner tasks against a single-model baseline.'
    ],
    outcome: 'The combined approach achieved a 40.0% exact-match solve rate, compared with 24.75% for the single-model baseline.'
  },
  {
    id: 'whisper', number: '05', title: 'Making speech AI work across languages',
    eyebrow: 'Applied ML · Speech', category: 'mlops', visual: 'whisper',
    description: 'Adapting Whisper for Bengali and Telugu using parameter-efficient fine-tuning and noise-robustness evaluation.',
    status: 'Academic project · 2025', highlight: '2 languages',
    tags: ['Whisper', 'LoRA', 'Python', 'WER', 'Speech AI'],
    github: 'https://github.com/IshmitaBasu/whisper-fine-tune-low-resource-language',
    problem: 'Explore how to improve automatic speech recognition for languages that often receive less model support.',
    approach: [
      'Fine-tuned Whisper for Bengali and Telugu using LoRA.',
      'Compared Word Error Rate before and after fine-tuning.',
      'Tested robustness under background noise and explored speaker diarisation.'
    ],
    outcome: 'A comparative evaluation of multilingual, parameter-efficient speech-model adaptation.'
  },
  {
    id: 'bundestag', number: '06', title: 'A useful interface for public discourse',
    eyebrow: 'Product engineering · Recommenders', category: 'ai', visual: 'bundestag',
    description: 'Front-end contributions to a personalised parliamentary-speech recommendation platform.',
    status: 'Team project · 2024–25', highlight: 'React + TypeScript',
    tags: ['React', 'TypeScript', 'Vite', 'Testing', 'Recommendation UI'],
    problem: 'Make recommendation results on parliamentary speeches easier for people to explore and understand.',
    approach: [
      'Built user-facing features in React and TypeScript.',
      'Integrated recommendation results into the interface.',
      'Designed tests, tracked defects and fixed usability issues.'
    ],
    outcome: 'Improved interaction quality and reliability for an academic recommendation platform.',
    note: 'No verified public source repository URL was provided for this project.'
  },
  {
    id: 'health', number: '07', title: 'Exploring how physicians and AI assess cases',
    eyebrow: 'Survey analytics · Research', category: 'analytics', visual: 'health',
    description: 'A structured comparison of practising physicians’ and AI systems’ assessments, visualised in Power BI.',
    status: 'Research study · 2024', highlight: 'Survey → insight',
    tags: ['Power BI', 'Descriptive Statistics', 'Survey Analysis'],
    problem: 'Understand differences in responses between physicians and AI systems using structured survey data.',
    approach: [
      'Aggregated questionnaire responses and compared rating distributions.',
      'Calculated descriptive statistics and built Power BI visualisations.',
      'Communicated differences and patterns without over-claiming clinical conclusions.'
    ],
    outcome: 'A transparent comparative analysis suitable for interpretation and discussion.',
    note: 'Exploratory assessment study, not a clinical validation.'
  },
];
const experience = [
  {
    id: 'uniper', range: 'APR 2025 — NOW', role: 'Market Analyst · Working Student', company: 'Uniper Global Commodities SE', location: 'Düsseldorf, Germany',
    intro: 'Power BI is a substantial part of my day-to-day work: from storage and gas dashboards to LNG-market models, reporting quality and practical AI-assisted development.',
    bullets: [
      'Contributed extensively to Power BI development and ongoing improvements across storage dashboards, gas analytics dashboards, LNG reporting and model-quality views.',
      'Spotted a slow Norwegian-model quality reporting workflow and proactively rebuilt the logic in Databricks SQL with multi-stage CTEs, ranking measures and error calculations.',
      'Developed Python, Pandas and PySpark workflows for LNG data, REST APIs, curated master tables and market-model features.',
      'Extended Asian LNG demand, forecasts and S&P contract dashboards beyond fixed reporting windows.',
      'Supported reporting stakeholders with DAX, Power Query, Snowflake SQL validation, testing, review and iterative dashboard updates.',
      'Used AI agents and AI-assisted coding workflows to explore approaches and troubleshoot SQL/Python logic; checked results against source data and business rules before applying changes.'
    ],
    tags: ['Power BI / DAX', 'Gas & storage', 'Databricks', 'Python / PySpark', 'AI agents', 'SQL']
  },
  {
    id: 'polestar', range: 'FEB 2021 — MAR 2024', role: 'Senior Data Analyst', company: 'Polestar Solutions & Services', location: 'Kolkata, India',
    intro: 'I learned to own the whole BI conversation: from finding out what the client actually needs to making sure the final report works.',
    bullets: [
      'Led client-facing Power BI delivery—from requirements and dashboard design to UAT, review and handover, including a large implementation spanning 200+ reports.',
      'Built SQL fact/dimension models, query optimisations, Python and Azure-based preparation pipelines.',
      'Used DAX, Power Query, row-level security and Power Apps to create role-specific reporting experiences.',
      'Applied ARIMA and regression to social-media engagement data and communicated the findings to business stakeholders.'
    ],
    tags: ['Power BI', 'SQL / Data modeling', 'Azure', 'Client delivery', 'Forecasting']
  },
  {
    id: 'pwc', range: 'JUN — JUL 2018', role: 'Technology Trainee', company: 'PwC India', location: 'Kolkata, India',
    intro: 'An early introduction to the importance of building software that someone else can understand and maintain.',
    bullets: [
      'Built a C# restaurant-registration interface with SQL tables and queries.',
      'Prepared technical documentation and supported testing and knowledge transfer.'
    ],
    tags: ['C#', 'SQL', 'Documentation', 'Testing']
  },
];

const html = (s) => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const tags = (items, max = items.length) => items.slice(0,max).map(v => `<span class="tag">${html(v)}</span>`).join('');

function artGraphic(visual) {
  if (visual === 'fraud') return `<div class="fraud-graphic"><div class="fraud-row"> <span>events</span>${Array.from({length:8},()=>'<i></i>').join('')}</div><div class="fraud-center"><span>ML</span><i class="fraud-pulse"></i><i class="fraud-pulse pulse-two"></i></div><div class="fraud-row fraud-row-end"><span>signals</span>${Array.from({length:8},()=>'<i></i>').join('')}</div></div>`;
  if (visual === 'retail') return `<div class="retail-graphic">${[32,63,48,81,57,95,75,100].map((n,i)=>`<i class="retail-bar" style="height:${n}%;animation-delay:${i*70}ms"></i>`).join('')}</div>`;
  if (visual === 'energy') return `<div class="energy-graphic"><i class="energy-orbit energy-orbit-1"></i><i class="energy-orbit energy-orbit-2"></i><span class="energy-lightning">ϟ</span><i class="energy-node node-a"></i><i class="energy-node node-b"></i><i class="energy-node node-c"></i></div>`;
  if (visual === 'swarm') return `<div class="swarm-graphic"><i class="swarm-connect"></i><i class="swarm-connect connect-two"></i><i class="swarm-connect connect-three"></i><i class="swarm-connect connect-four"></i><span class="swarm-node swarm-core">ToT</span><span class="swarm-node swarm-a">01</span><span class="swarm-node swarm-b">02</span><span class="swarm-node swarm-c">03</span><span class="swarm-node swarm-d">04</span></div>`;
  if (visual === 'whisper') return `<div class="waveform">${[15,27,40,80,52,91,73,45,22,65,98,62,29,43,76,83,48,30,64,94,56,31,17,49,26,15].map(n=>`<i style="height:${n}%"></i>`).join('')}</div>`;
  if (visual === 'bundestag') return `<div class="product-window"><div class="product-top"><i></i><i></i><i></i></div><div class="product-line wide"></div><div class="product-line"></div><div class="product-cards"><span></span><span></span><span></span></div></div>`;
  return `<div class="health-graphic"><div class="health-rail">COMPARATIVE RESULTS<span class="health-bar-a"></span></div><div class="health-rail">ASSESSMENT RATINGS<span class="health-bar-b"></span></div><div class="health-rail">RESPONSE ANALYSIS<span class="health-bar-c"></span></div></div>`;
}
function art(p) {
  return `<div class="project-art art-${html(p.visual)}"><span class="art-corner-label">${html(p.eyebrow.toUpperCase())}</span>${artGraphic(p.visual)}<div class="art-bottom-label">${html(p.number)} / SELECTED WORK <span>✳</span></div></div>`;
}
function renderProjects(filter='all') {
  const list = projects.filter(p => filter === 'all' || p.category === filter);
  $('#projects-grid').innerHTML = list.map(p => `<article class="project-card">
    <button type="button" class="project-card-main" data-open-project="${html(p.id)}" aria-label="Read case study: ${html(p.title)}">
      ${art(p)}<div class="project-card-copy"><div class="project-meta"><span>${html(p.status)}</span><span>${html(p.highlight)}</span></div>
      <h3>${html(p.title)} <span aria-hidden="true" class="project-title-arrow">↗</span></h3><p>${html(p.description)}</p></div></button>
    <div class="project-card-bottom"><div class="tag-row">${tags(p.tags,3)}</div>${p.github ? `<a class="project-repo" href="${html(p.github)}" target="_blank" rel="noopener noreferrer" aria-label="View ${html(p.title)} on GitHub" title="View code">GitHub ↗</a>` : '<span class="project-private">Case study ↗</span>'}</div>
    </article>`).join('');
  $('#projects-grid').querySelectorAll('[data-open-project]').forEach(button => button.addEventListener('click',()=>openProject(button.dataset.openProject)));
}

let lastFocus=null;
function openProject(id) {
  const p = projects.find(x=>x.id===id); if(!p) return;
  lastFocus=document.activeElement;
  $('#dialog-content').innerHTML = `${art(p)}<div class="dialog-content"><div class="dialog-overline">${html(p.eyebrow)} <span>·</span> ${html(p.status)}</div><h2 id="dialog-title">${html(p.title)}</h2><p class="dialog-lead">${html(p.description)}</p>
    <div class="dialog-stat"><span>PROJECT HIGHLIGHT</span><strong>${html(p.highlight)}</strong></div>
    <h3>The problem</h3><p>${html(p.problem)}</p>
    <h3>How I approached it</h3><ul>${p.approach.map(x=>`<li>${html(x)}</li>`).join('')}</ul>
    <h3>The result</h3><p>${html(p.outcome)}</p>
    ${p.note ? `<div class="dialog-note"><strong>Context and limitations</strong><p>${html(p.note)}</p></div>` : ''}
    <div class="dialog-tags">${tags(p.tags)}</div>
    <div class="dialog-actions">${p.github ? `<a class="btn btn-primary" href="${html(p.github)}" target="_blank" rel="noopener noreferrer">View on GitHub ↗</a>` : '<span class="project-private">Public source link not yet available</span>'}<button type="button" class="btn btn-outline" id="dialog-bottom-close">Back to projects ✕</button></div>
    </div>`;
  $('#case-dialog').hidden=false;
  document.body.style.overflow='hidden';
  $('#dialog-bottom-close').addEventListener('click',closeProject);
  $('#dialog-close').focus();
}
function closeProject() {
  $('#case-dialog').hidden=true;document.body.style.overflow='';
  if(lastFocus && lastFocus.isConnected)lastFocus.focus();
}
function renderTimeline() {
  $('#timeline').innerHTML=experience.map((job,i)=> `<article class="timeline-item ${i===0?'expanded':''}" data-job="${html(job.id)}"><div class="timeline-index">${String(i+1).padStart(2,'0')} / ${html(job.range)}</div>
    <button class="timeline-toggle" type="button" aria-expanded="${i===0}" aria-controls="detail-${html(job.id)}"><div><span class="timeline-period">${html(job.location)}</span><h3>${html(job.role)}</h3><p class="timeline-company">${html(job.company)}</p></div><span class="timeline-chevron" aria-hidden="true">⌄</span></button>
    <div class="timeline-detail" id="detail-${html(job.id)}" ${i===0?'':'hidden'}><p>${html(job.intro)}</p><ul>${job.bullets.map(x=>`<li>${html(x)}</li>`).join('')}</ul><div class="timeline-tags">${tags(job.tags)}</div></div></article>`).join('');
  $$('.timeline-toggle').forEach(btn=>btn.addEventListener('click',()=> {
    const item=btn.closest('.timeline-item'),panel=item.querySelector('.timeline-detail');
    const expanding=panel.hidden;
    $$('.timeline-item').forEach(outer=> {outer.classList.remove('expanded');outer.querySelector('.timeline-detail').hidden=true;outer.querySelector('.timeline-toggle').setAttribute('aria-expanded','false')});
    if(expanding) {item.classList.add('expanded');panel.hidden=false;btn.setAttribute('aria-expanded','true')}
  }));
}
function setTheme(value) {
  document.documentElement.dataset.theme=value;
  const btn=$('#theme-toggle');if(btn){btn.textContent=value==='dark'?'☀':'☾';btn.setAttribute('aria-label',`Switch to ${value==='dark'?'light':'dark'} mode`)}
  try{localStorage.setItem('ishmita-theme',value)}catch(_e){}
}
function start() {
  renderProjects(); renderTimeline();
  $('#filter-bar').querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
    $$('.filter-button').forEach(b=>{const chosen=b===button;b.classList.toggle('active',chosen);b.setAttribute('aria-pressed',String(chosen));});
    renderProjects(button.dataset.filter);
  }));
  $('#dialog-close').addEventListener('click',closeProject);
  $('#case-dialog').addEventListener('click',event=>{if(event.target===event.currentTarget)closeProject()});
  document.addEventListener('keydown',event=>{
    if(event.key==='Escape' && !$('#case-dialog').hidden) closeProject();
    if(event.key==='Tab' && !$('#case-dialog').hidden){
      const f=[...$('#case-dialog').querySelectorAll('button:not([disabled]),a[href]')].filter(x=>x.getClientRects().length);
      if(!f.length)return; const first=f[0],last=f[f.length-1];
      if(event.shiftKey && document.activeElement===first){event.preventDefault();last.focus()}
      else if(!event.shiftKey && document.activeElement===last){event.preventDefault();first.focus()}
    }
  });
  setTheme(document.documentElement.dataset.theme==='light'?'light':'dark');
  $('#theme-toggle').addEventListener('click',()=>setTheme(document.documentElement.dataset.theme==='dark'?'light':'dark'));
  const nav=$('#main-nav'),menu=$('#menu-toggle');
  menu.addEventListener('click',()=>{const on=nav.classList.toggle('nav-open');menu.setAttribute('aria-expanded',String(on));menu.setAttribute('aria-label',on?'Close menu':'Open menu')});
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('nav-open');menu.setAttribute('aria-expanded','false')}));
  $('#current-year').textContent=new Date().getFullYear();
  $('#copy-email').addEventListener('click',async()=>{
    try{await navigator.clipboard.writeText('ishmita.basu98@gmail.com');const b=$('#copy-email');b.textContent='Copied ✓';setTimeout(()=>b.textContent='Copy email ⧉',2100)}
    catch(err){window.location.href='mailto:ishmita.basu98@gmail.com';}
  });
  if('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    document.documentElement.classList.add('js-ready');
    const obs=new IntersectionObserver(entries=>{for(const entry of entries) if(entry.isIntersecting){entry.target.classList.add('visible');obs.unobserve(entry.target)}}, {threshold:.07,rootMargin:'0px 0px 40px 0px'});
    $$('.reveal').forEach(x=>obs.observe(x));
  }
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
