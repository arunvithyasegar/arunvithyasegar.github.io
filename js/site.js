"use strict";
// Defense in depth. The Pages setting must also redirect before HTML is served.
const productionHosts = new Set([
  "arunvithyasegar.in",
  "www.arunvithyasegar.in",
  "arunvithyasegar.github.io",
]);
if (location.protocol === "http:" && productionHosts.has(location.hostname)) {
  const secureURL = new URL(location.href);
  secureURL.protocol = "https:";
  location.replace(secureURL.href);
}

const year = document.querySelector("#year");
if (year) year.textContent = String(new Date().getFullYear());
const search = document.querySelector("#project-search");
const projects = [...document.querySelectorAll(".project-card")];
const count = document.querySelector("#project-count");
const projectTools = document.querySelector(".project-tools");
if (search && count && projectTools) {
  projectTools.hidden = false;
  const filterProjects = () => {
    const query = search.value.trim().toLocaleLowerCase();
    let visible = 0;
    for (const project of projects) {
      project.hidden = !project.textContent.toLocaleLowerCase().includes(query);
      if (!project.hidden) visible++;
    }
    count.textContent = visible
      ? `${visible} of ${projects.length} projects`
      : "No projects match. Try another search.";
  };
  search.addEventListener("input", filterProjects);
  search.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      search.value = "";
      filterProjects();
    }
  });
  filterProjects();
}

// Support direct page URLs and bookmarks from the previous site.
const routeNames = new Set([
  "home",
  "about",
  "resume",
  "projects",
  "stats",
  "contact",
]);
const routeFromPath = location.pathname
  ?.replace(/^\/|\/$/g, "")
  .replace(/\.html$/, "");
const hashName = location.hash?.slice(1).replace(/-page$/, "");
const targetName = location.hash ? hashName : routeFromPath;
if (routeNames.has(targetName)) {
  const section = document.getElementById(targetName);
  if (
    section &&
    (location.pathname !== "/" || location.hash !== `#${targetName}`)
  ) {
    section.scrollIntoView({ behavior: "instant" });
  }
}
