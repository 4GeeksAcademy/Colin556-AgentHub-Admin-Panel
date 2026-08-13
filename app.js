const kpis = [
  { icon: "$", label: "Total Revenue", value: "$124,500" },
  { icon: "%", label: "Discount/Coupon Losses", value: "$8,240" },
  { icon: "A", label: "Active Agents", value: "18" },
  { icon: "!", label: "Failing Agents", value: "3" }
];

const users = [
  { name: "Mia Torres", email: "mia@northlane.io", plan: "Enterprise", status: "Active", joined: "2026-01-08", usage: "12.4M tokens / month" },
  { name: "Noah Bennett", email: "noah@skyforge.ai", plan: "Pro", status: "Trial", joined: "2026-03-12", usage: "3.1M tokens / month" },
  { name: "Ivy Chen", email: "ivy@altaflow.dev", plan: "Starter", status: "Pending", joined: "2026-04-30", usage: "920K tokens / month" },
  { name: "Luca Park", email: "luca@metaroute.com", plan: "Enterprise", status: "Active", joined: "2025-11-02", usage: "9.7M tokens / month" },
  { name: "Rosa Vega", email: "rosa@trailgrid.io", plan: "Pro", status: "Suspended", joined: "2026-02-22", usage: "1.8M tokens / month" }
];

const agents = [
  {
    name: "Navigator Support Agent",
    owner: "Mia Torres",
    status: "Active",
    skills: ["ticket-routing", "faq-memory", "order-lookup"],
    prompt: "You are Navigator Support Agent. Always classify user issue intent before selecting tools. Provide concise answers and include escalation paths for billing disputes."
  },
  {
    name: "Pulse Sales Assistant",
    owner: "Luca Park",
    status: "Warning",
    skills: ["lead-scoring", "crm-sync", "followup-writer"],
    prompt: "You are Pulse Sales Assistant. Prioritize qualified leads and summarize risk signals. Never expose private client data, and ask one clarifying question before sending an outbound draft."
  },
  {
    name: "Atlas Compliance Checker",
    owner: "Rosa Vega",
    status: "Failing",
    skills: ["policy-lint", "pii-redaction", "audit-log"],
    prompt: "You are Atlas Compliance Checker. Validate every response against policy constraints. Block disallowed content and return remediation guidance in bullet form."
  },
  {
    name: "Beacon Ops Coordinator",
    owner: "Ivy Chen",
    status: "Active",
    skills: ["incident-triage", "status-page-sync", "postmortem-draft"],
    prompt: "You are Beacon Ops Coordinator. Convert noisy logs into action plans, tag impacted services, and generate clear owner next steps with estimated resolution times."
  }
];

const skills = [
  { name: "ticket-routing", description: "Routes inbound requests to the best workflow lane.", enabledAgents: 9 },
  { name: "policy-lint", description: "Validates output against governance and legal guardrails.", enabledAgents: 5 },
  { name: "lead-scoring", description: "Scores sales leads using account signals and behavior.", enabledAgents: 7 },
  { name: "incident-triage", description: "Detects operational incidents and suggests first response steps.", enabledAgents: 6 }
];

const contracts = [
  {
    client: "Northlane Logistics",
    agent: "Navigator Support Agent",
    skills: ["ticket-routing", "order-lookup"],
    start: "2026-01-01",
    end: "2026-12-31",
    total: "$36,000",
    pricing: [
      { skill: "ticket-routing", monthly: 1800 },
      { skill: "order-lookup", monthly: 1200 }
    ]
  },
  {
    client: "Skyforge Labs",
    agent: "Pulse Sales Assistant",
    skills: ["lead-scoring", "followup-writer"],
    start: "2026-02-14",
    end: "2026-11-14",
    total: "$22,500",
    pricing: [
      { skill: "lead-scoring", monthly: 1500 },
      { skill: "followup-writer", monthly: 750 }
    ]
  },
  {
    client: "AltaFlow Systems",
    agent: "Beacon Ops Coordinator",
    skills: ["incident-triage", "status-page-sync", "postmortem-draft"],
    start: "2026-03-01",
    end: "2026-09-01",
    total: "$18,900",
    pricing: [
      { skill: "incident-triage", monthly: 1200 },
      { skill: "status-page-sync", monthly: 900 },
      { skill: "postmortem-draft", monthly: 1050 }
    ]
  },
  {
    client: "MetaRoute Retail",
    agent: "Atlas Compliance Checker",
    skills: ["policy-lint", "pii-redaction", "audit-log"],
    start: "2026-04-10",
    end: "2026-10-10",
    total: "$27,300",
    pricing: [
      { skill: "policy-lint", monthly: 1400 },
      { skill: "pii-redaction", monthly: 1250 },
      { skill: "audit-log", monthly: 900 }
    ]
  }
];

const errors = [
  {
    timestamp: "2026-08-13 08:14",
    agent: "Atlas Compliance Checker",
    type: "Critical",
    description: "Policy resolver timeout on legal summary request.",
    id: "ERR-9011",
    workflow: "policy-lint",
    trace: "TimeoutError: policyResolver exceeded 7000ms\n  at executePolicyCheck (policy.js:88)\n  at runGuardrailPipeline (pipeline.js:219)\n  caused by: network gateway saturation"
  },
  {
    timestamp: "2026-08-13 07:46",
    agent: "Pulse Sales Assistant",
    type: "Warning",
    description: "CRM sync retried 3 times before success.",
    id: "ERR-9008",
    workflow: "crm-sync",
    trace: "SyncWarning: transient auth refresh mismatch\n  at syncLeadRecord (crm.ts:164)\n  retryCount=3, eventualSuccess=true"
  },
  {
    timestamp: "2026-08-13 06:52",
    agent: "Navigator Support Agent",
    type: "Error",
    description: "Tool response schema mismatch in order lookup.",
    id: "ERR-9004",
    workflow: "order-lookup",
    trace: "SchemaError: missing field order_status\n  at validateLookupResult (schema.ts:45)\n  payload={ order_id: 18831, status: null }"
  },
  {
    timestamp: "2026-08-12 22:21",
    agent: "Beacon Ops Coordinator",
    type: "Info",
    description: "Incident runbook fallback used after API throttle.",
    id: "ERR-8997",
    workflow: "incident-triage",
    trace: "Info: fallbackRunbook selected\n  at createIncidentPlan (ops.js:130)\n  reason=429 from upstream status API"
  },
  {
    timestamp: "2026-08-12 20:17",
    agent: "Atlas Compliance Checker",
    type: "Critical",
    description: "PII redaction stage failed regex compile.",
    id: "ERR-8991",
    workflow: "pii-redaction",
    trace: "RegexCompileError: invalid group specifier\n  at buildPatternSet (redaction.py:201)\n  configVersion=v2.8.4"
  },
  {
    timestamp: "2026-08-12 18:09",
    agent: "Pulse Sales Assistant",
    type: "Warning",
    description: "Outbound draft queue delayed over SLA threshold.",
    id: "ERR-8985",
    workflow: "followup-writer",
    trace: "SlaWarning: queue lag 181s\n  at processDraftQueue (writer.ts:77)\n  expected<120s"
  }
];

const state = {
  activeMenu: null,
  modalOpen: false,
  lastTrigger: null,
  theme: "light"
};

const kpiGrid = document.getElementById("kpi-grid");
const usersBody = document.getElementById("users-body");
const usersMobile = document.getElementById("users-mobile");
const agentsList = document.getElementById("agents-list");
const skillsList = document.getElementById("skills-list");
const contractsBody = document.getElementById("contracts-body");
const contractsMobile = document.getElementById("contracts-mobile");
const errorsBody = document.getElementById("errors-body");
const errorsMobile = document.getElementById("errors-mobile");
const modal = document.getElementById("app-modal");
const modalBackdrop = document.getElementById("modal-backdrop");
const modalContent = document.getElementById("modal-content");
const modalTitle = document.getElementById("modal-title");
const modalClose = document.getElementById("modal-close");
const themeToggle = document.getElementById("theme-toggle");

function badgeClass(label) {
  const value = label.toLowerCase();
  if (value.includes("active") || value.includes("resolved") || value.includes("healthy")) return "success";
  if (value.includes("trial") || value.includes("pending") || value.includes("warning")) return "warning";
  if (value.includes("failing") || value.includes("error") || value.includes("critical") || value.includes("suspended")) return "danger";
  return "info";
}

function createBadge(label) {
  return `<span class="badge ${badgeClass(label)}">${label}</span>`;
}

function renderKpis() {
  kpiGrid.innerHTML = kpis.map((item) => `
    <article class="kpi-card">
      <span class="kpi-icon" aria-hidden="true">${item.icon}</span>
      <p class="kpi-label">${item.label}</p>
      <p class="kpi-value">${item.value}</p>
    </article>
  `).join("");
}

function actionButton(entity, idx, actions) {
  const config = encodeURIComponent(JSON.stringify(actions));
  return `
    <div class="row-actions">
      <button
        class="menu-toggle"
        type="button"
        aria-label="Open actions menu"
        aria-expanded="false"
        data-entity="${entity}"
        data-index="${idx}"
        data-actions="${config}">
        ⋮
      </button>
    </div>
  `;
}

function renderUsers() {
  usersBody.innerHTML = users.map((user, idx) => `
    <tr data-id="user-${idx}">
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${user.plan}</td>
      <td>${createBadge(user.status)}</td>
      <td>${actionButton("user", idx, ["View detail", "Delete"])}</td>
    </tr>
  `).join("");

  usersMobile.innerHTML = users.map((user, idx) => `
    <article class="mobile-card" data-id="user-mobile-${idx}">
      <div class="mobile-card-head">
        <h4>${user.name}</h4>
        ${actionButton("user", idx, ["View detail", "Delete"])}
      </div>
      <p class="mobile-meta">${user.email}</p>
      <div class="mobile-row"><strong>Plan</strong><span>${user.plan}</span></div>
      <div class="mobile-row"><strong>Status</strong>${createBadge(user.status)}</div>
      <div class="mobile-row"><strong>Usage</strong><span>${user.usage}</span></div>
    </article>
  `).join("");
}

function renderAgents() {
  agentsList.innerHTML = agents.map((agent, idx) => `
    <article class="agent-item" data-id="agent-${idx}">
      <div class="agent-top">
        <button class="expand-toggle" type="button" aria-label="Expand skills" aria-expanded="false" data-target="skills-${idx}">⌄</button>
        <div>
          <div class="agent-name">${agent.name}</div>
          <div class="agent-owner">Owner: ${agent.owner}</div>
        </div>
        <div>${createBadge(agent.status)}</div>
        ${actionButton("agent", idx, ["Configure", "Delete"])}
      </div>
      <div id="skills-${idx}" class="skills-collapsible" aria-hidden="true">
        <div class="skills-tags">
          ${agent.skills.map((skill) => `<span>${skill}</span>`).join("")}
        </div>
      </div>
    </article>
  `).join("");
}

function renderSkills() {
  skillsList.innerHTML = skills.map((skill, idx) => `
    <article class="skill-item" data-id="skill-${idx}">
      <div class="skill-top">
        <div>
          <div class="skill-name">${skill.name}</div>
          <div class="skill-desc">${skill.description}</div>
        </div>
        <div class="skill-count">Enabled on ${skill.enabledAgents} agents</div>
        ${actionButton("skill", idx, ["View detail", "Delete"])}
      </div>
    </article>
  `).join("");
}

function renderContracts() {
  contractsBody.innerHTML = contracts.map((contract, idx) => `
    <tr data-id="contract-${idx}">
      <td>${contract.client}</td>
      <td>${contract.agent}</td>
      <td>${contract.skills.join(", ")}</td>
      <td>${contract.start}</td>
      <td>${contract.end}</td>
      <td>${contract.total}</td>
      <td>${actionButton("contract", idx, ["View detail"])}</td>
    </tr>
  `).join("");

  contractsMobile.innerHTML = contracts.map((contract, idx) => `
    <article class="mobile-card" data-id="contract-mobile-${idx}">
      <div class="mobile-card-head">
        <h4>${contract.client}</h4>
        ${actionButton("contract", idx, ["View detail"])}
      </div>
      <div class="mobile-row"><strong>Agent</strong><span>${contract.agent}</span></div>
      <div class="mobile-row"><strong>Skills</strong><span>${contract.skills.join(", ")}</span></div>
      <div class="mobile-row"><strong>Window</strong><span>${contract.start} to ${contract.end}</span></div>
      <div class="mobile-row"><strong>Total</strong><span class="mobile-total">${contract.total}</span></div>
    </article>
  `).join("");
}

function renderErrors() {
  errorsBody.innerHTML = errors.map((entry, idx) => `
    <tr data-id="error-${idx}">
      <td>${entry.timestamp}</td>
      <td>${entry.agent}</td>
      <td>${createBadge(entry.type)}</td>
      <td>${entry.description}</td>
      <td>${actionButton("error", idx, ["View detail", "Mark as resolved"])}</td>
    </tr>
  `).join("");

  errorsMobile.innerHTML = errors.map((entry, idx) => `
    <article class="mobile-card" data-id="error-mobile-${idx}">
      <div class="mobile-card-head">
        <h4>${entry.agent}</h4>
        ${actionButton("error", idx, ["View detail", "Mark as resolved"])}
      </div>
      <div class="mobile-row"><strong>Time</strong><span>${entry.timestamp}</span></div>
      <div class="mobile-row"><strong>Type</strong>${createBadge(entry.type)}</div>
      <p class="mobile-meta">${entry.description}</p>
    </article>
  `).join("");
}

function closeAllMenus() {
  document.querySelectorAll(".menu").forEach((menu) => menu.remove());
  document.querySelectorAll(".menu-toggle").forEach((button) => button.setAttribute("aria-expanded", "false"));
  state.activeMenu = null;
}

function openMenu(trigger) {
  const menuTemplate = document.getElementById("menu-template");
  const menuNode = menuTemplate.content.firstElementChild.cloneNode(true);
  const actions = JSON.parse(decodeURIComponent(trigger.dataset.actions));

  menuNode.innerHTML = "";
  actions.forEach((label) => {
    const button = document.createElement("button");
    button.type = "button";
    button.setAttribute("role", "menuitem");
    button.textContent = label;
    button.addEventListener("click", () => handleMenuAction(trigger, label));
    menuNode.appendChild(button);
  });

  closeAllMenus();
  menuNode.classList.add("floating-menu");
  menuNode.style.position = "fixed";
  document.body.appendChild(menuNode);

  const triggerRect = trigger.getBoundingClientRect();
  const menuRect = menuNode.getBoundingClientRect();
  const gap = 6;
  let left = triggerRect.right - menuRect.width;
  let top = triggerRect.bottom + gap;

  if (left < gap) left = gap;
  if (left + menuRect.width > window.innerWidth - gap) {
    left = window.innerWidth - menuRect.width - gap;
  }
  if (top + menuRect.height > window.innerHeight - gap) {
    top = triggerRect.top - menuRect.height - gap;
  }
  if (top < gap) top = gap;

  menuNode.style.left = `${left}px`;
  menuNode.style.top = `${top}px`;

  trigger.setAttribute("aria-expanded", "true");
  state.activeMenu = { node: menuNode, trigger };
}

function openModal(title, htmlContent, trigger = null) {
  state.lastTrigger = trigger;
  state.modalOpen = true;
  modalTitle.textContent = title;
  modalContent.innerHTML = htmlContent;
  modal.hidden = false;
  modalBackdrop.hidden = false;
  document.body.style.overflow = "hidden";
  modal.focus();
}

function closeModal() {
  if (!state.modalOpen) return;
  state.modalOpen = false;
  modal.hidden = true;
  modalBackdrop.hidden = true;
  modalContent.innerHTML = "";
  document.body.style.overflow = "";
  if (state.lastTrigger) state.lastTrigger.focus();
}

function userModal(user) {
  return `
    <div class="modal-grid">
      <div><strong>Name</strong>${user.name}</div>
      <div><strong>Email</strong>${user.email}</div>
      <div><strong>Plan</strong>${user.plan}</div>
      <div><strong>Status</strong>${createBadge(user.status)}</div>
      <div><strong>Joined</strong>${user.joined}</div>
      <div><strong>Usage</strong>${user.usage}</div>
    </div>
  `;
}

function agentConfigureModal(agent) {
  return `
    <label for="system-prompt"><strong>Agent System Prompt</strong></label>
    <textarea id="system-prompt">${agent.prompt}</textarea>
    <div class="modal-footer">
      <button class="btn" type="button" id="cancel-config">Cancel</button>
      <button class="btn" type="button">Save</button>
    </div>
  `;
}

function skillDetailModal(skill) {
  return `
    <div class="modal-grid">
      <div><strong>Skill Name</strong>${skill.name}</div>
      <div><strong>Enabled Agents</strong>${skill.enabledAgents}</div>
      <div style="grid-column: 1 / -1;"><strong>Description</strong>${skill.description}</div>
    </div>
  `;
}

function contractDetailModal(contract) {
  const itemRows = contract.pricing
    .map((row) => `<tr><td>${row.skill}</td><td>$${row.monthly.toLocaleString()} / month</td></tr>`)
    .join("");
  const subtotal = contract.pricing.reduce((sum, row) => sum + row.monthly, 0);
  const serviceFee = Math.round(subtotal * 0.08);
  const finalMonthly = subtotal + serviceFee;

  return `
    <div class="modal-grid">
      <div><strong>Client</strong>${contract.client}</div>
      <div><strong>Agent</strong>${contract.agent}</div>
      <div><strong>Start</strong>${contract.start}</div>
      <div><strong>End</strong>${contract.end}</div>
    </div>
    <h5>Itemized Skill Pricing</h5>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Skill</th><th>Monthly Price</th></tr></thead>
        <tbody>${itemRows}</tbody>
      </table>
    </div>
    <div class="modal-grid" style="margin-top: 10px;">
      <div><strong>Subtotal (Monthly)</strong>$${subtotal.toLocaleString()}</div>
      <div><strong>Service Fee (8%)</strong>$${serviceFee.toLocaleString()}</div>
      <div style="grid-column: 1 / -1;"><strong>Final Monthly</strong>$${finalMonthly.toLocaleString()}</div>
    </div>
  `;
}

function errorDetailModal(entry) {
  return `
    <div class="modal-grid">
      <div><strong>Error ID</strong>${entry.id}</div>
      <div><strong>Severity</strong>${createBadge(entry.type)}</div>
      <div><strong>Agent</strong>${entry.agent}</div>
      <div><strong>Workflow</strong>${entry.workflow}</div>
      <div style="grid-column: 1 / -1;"><strong>Timestamp</strong>${entry.timestamp}</div>
    </div>
    <h5>Trace Details</h5>
    <pre class="trace">${entry.trace}</pre>
  `;
}

function handleMenuAction(trigger, label) {
  const entity = trigger.dataset.entity;
  const idx = Number(trigger.dataset.index);

  closeAllMenus();

  if (entity === "user" && label === "View detail") {
    openModal("User Detail", userModal(users[idx]), trigger);
    return;
  }

  if (entity === "agent" && label === "Configure") {
    openModal("Configure Agent", agentConfigureModal(agents[idx]), trigger);
    document.getElementById("cancel-config")?.addEventListener("click", closeModal);
    return;
  }

  if (entity === "skill" && label === "View detail") {
    openModal("Skill Detail", skillDetailModal(skills[idx]), trigger);
    return;
  }

  if (entity === "contract" && label === "View detail") {
    openModal("Contract Detail", contractDetailModal(contracts[idx]), trigger);
    return;
  }

  if (entity === "error" && label === "View detail") {
    openModal("Error Trace", errorDetailModal(errors[idx]), trigger);
    return;
  }

  if (entity === "error" && label === "Mark as resolved") {
    const row = document.querySelector(`[data-id=\"error-${idx}\"] td:nth-child(3)`);
    if (row) row.innerHTML = createBadge("Resolved");
    return;
  }

  if (label === "Delete") {
    openModal("Action Preview", "<p>This prototype keeps destructive actions disabled. Backend wiring can attach deletion handlers later.</p>", trigger);
  }
}

function setupEventDelegation() {
  document.addEventListener("click", (event) => {
    const menuToggle = event.target.closest(".menu-toggle");
    if (menuToggle) {
      if (menuToggle.getAttribute("aria-expanded") === "true") {
        closeAllMenus();
      } else {
        openMenu(menuToggle);
      }
      return;
    }

    const expandToggle = event.target.closest(".expand-toggle");
    if (expandToggle) {
      const target = document.getElementById(expandToggle.dataset.target);
      const isOpen = expandToggle.getAttribute("aria-expanded") === "true";
      expandToggle.setAttribute("aria-expanded", String(!isOpen));
      target.classList.toggle("open", !isOpen);
      target.setAttribute("aria-hidden", String(isOpen));
      return;
    }

    if (!event.target.closest(".row-actions") && !event.target.closest(".menu")) {
      closeAllMenus();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeAllMenus();
      closeModal();
    }
  });

  window.addEventListener("resize", closeAllMenus);
  window.addEventListener("scroll", closeAllMenus, true);

  modalClose.addEventListener("click", closeModal);
  modalBackdrop.addEventListener("click", closeModal);

  themeToggle.addEventListener("click", () => {
    const html = document.documentElement;
    const dark = html.classList.toggle("theme-dark");
    html.classList.toggle("theme-light", !dark);
    state.theme = dark ? "dark" : "light";
    themeToggle.textContent = dark ? "Light mode" : "Dark mode";
  });
}

function init() {
  renderKpis();
  renderUsers();
  renderAgents();
  renderSkills();
  renderContracts();
  renderErrors();
  setupEventDelegation();
}

init();
