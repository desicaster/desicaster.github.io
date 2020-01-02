export const projects = [
  {
    id: "0",
    projectTitle: "Favorites",
    projectDescription:
      "This is where actors you've favorited will end up. We're still building out this feature, so you might see bugs here and there!",
    scouts: [
      { name: "John Doe", id: "0", joinDate: "11/2/2019" },
      { name: "Jamie Smith", id: "1", joinDate: "11/2/2019" },
      { name: "Eddy Johnson", id: "2", joinDate: "11/2/2019" }
    ],
    workflow: [
      { id: "0", label: "Send initial contact email" },
      { id: "1", label: "Review prior projects and reel" },
      { id: "2", label: "Send request for virtual audition" },
      { id: "3", label: "Review audition tapes with producers" },
      { id: "4", label: "Call them in for an in-person audition" },
      { id: "5", label: "Enter intro contract negotiation" }
    ],
    tags: ["tag one", "tag two", "tag three", "tag four"],
    count: "12",
    publishDate: "January 2nd, 2020",
    lastUpdate: "2 hours ago",
    archived: false,
    ip: [1, 2, 9],
    similar: ["0", "1", "2", "3", "4"],
    collections: [
      { heading: "Sample section", body: "this is the sample text" }
    ],
    searches: [
      {
        name: "Filter A",
        filters: [
          ["Actor", "age", "is not above", ["24"]],
          ["Abilities", "languages include", "", ["Urdu", "Arabic"]]
        ],
        results: "506"
      },
      {
        name: "Filter B",
        filters: [
          ["Actor", "age", "is not above", ["24"]],
          ["Abilities", "languages include", "", ["Urdu", "Arabic"]]
        ],
        results: "609"
      },
      {
        name: "Filter C",
        filters: [
          ["Actor", "age", "is not above", ["24"]],
          ["Abilities", "languages include", "", ["Urdu", "Arabic"]]
        ],
        results: "607"
      }
    ]
  },
  {
    id: "1",
    projectTitle: "New Years Eve",
    projectDescription:
      "This is an example of a sample project you might create to hold actors and manage casting for a project.",
    scouts: [
      { name: "John Doe", id: "0", joinDate: "11/2/2019" },
      { name: "Jamie Smith", id: "1", joinDate: "11/2/2019" },
      { name: "Eddy Johnson", id: "2", joinDate: "11/2/2019" }
    ],
    workflow: [
      { id: "0", label: "Send initial contact email" },
      { id: "1", label: "Review prior projects and reel" },
      { id: "2", label: "Send request for virtual audition" },
      { id: "3", label: "Review audition tapes with producers" },
      { id: "4", label: "Call them in for an in-person audition" },
      { id: "5", label: "Enter intro contract negotiation" }
    ],
    tags: ["tag one", "tag two", "tag three", "tag four"],
    count: "12",
    publishDate: "January 2nd, 2020",
    lastUpdate: "2 hours ago",
    archived: false,
    actors: [0, 5, 6],
    similar: ["0", "1", "2", "3", "4"],
    collections: [
      { heading: "Sample section", body: "this is the sample text" }
    ],
    searches: [
      {
        name: "Filter A",
        filters: [
          ["Actor", "age", "is not above", ["24"]],
          ["Abilities", "languages include", "", ["Urdu", "Arabic"]]
        ],
        results: "607"
      },
      {
        name: "Filter B",
        results: "607",
        filters: [
          ["Actor", "age", "is not above", ["24"]],
          ["Abilities", "languages include", "", ["Urdu", "Arabic"]]
        ]
      },
      {
        name: "Filter C",
        results: "607",
        filters: [
          ["Actor", "age", "is not above", ["24"]],
          ["Abilities", "languages include", "", ["Urdu", "Arabic"]]
        ]
      }
    ]
  }
];

export const archived_projects = [
  {
    id: "42",
    projectTitle: "Archived Audition",
    projectDescription: "This is where auditions go when archived.",
    scouts: [
      { name: "John Doe", id: "0", joinDate: "11/2/2019" },
      { name: "Jamie Smith", id: "1", joinDate: "11/2/2019" },
      { name: "Eddy Johnson", id: "2", joinDate: "11/2/2019" }
    ],
    workflow: [
      { id: "0", label: "Send Initial Contact Email" },
      { id: "1", label: "Review Non Confidential Information" },
      { id: "2", label: "Internal Review & Validation" },
      { id: "3", label: "Send NDA" },
      { id: "4", label: "Review Confidential Information" },
      { id: "5", label: "Enter Intro Contract Negotiation" }
    ],
    tags: ["tag one", "tag two", "tag three", "tag four"],
    count: "12",
    publishDate: "November 2nd, 2019",
    lastUpdate: "12 hours ago",
    archived: true,
    ip: [0, 5, 6],
    similar: ["0", "1", "2", "3", "4"],
    collections: [
      { heading: "Sample section", body: "this is the sample text" }
    ],
    searches: [
      {
        name: "Filter A",
        filters: [
          ["Actor", "age", "is not above", ["24"]],
          ["Abilities", "languages include", "", ["Urdu", "Arabic"]]
        ],
        results: "506"
      },
      {
        name: "Filter B",
        filters: [
          ["Actor", "age", "is not above", ["24"]],
          ["Abilities", "languages include", "", ["Urdu", "Arabic"]]
        ],
        results: "609"
      },
      {
        name: "Filter C",
        filters: [
          ["Actor", "age", "is not above", ["24"]],
          ["Abilities", "languages include", "", ["Urdu", "Arabic"]]
        ],
        results: "607"
      }
    ]
  }
];

export function getProjects(displayArchived, search, sort) {
  if (displayArchived) {
    return archived_projects;
  }
  return projects;
}

export function getAllProjects() {
  return projects;
}

export function getWorkflowItems(id) {
  const project = projects.find(i => id === i.id);
  return project ? project.workflow : [];
}

export function addWorkflowItem(item, projectId) {
  let project = projects.find(i => projectId === i.id);
  if (project) {
    item.id = project.workflow.length.toString();
    project.workflow.push(item);

    return project;
  }
  return {};
}

export function getProject(id) {
  return projects.find(i => id === i.id);
}

export function addSearchToProject(filters, project_id) {
  console.log("sorry there's no backend");
}

export function addIPToProject(ip_id, project_id) {
  console.log("sorry there's no backend");
}

export function removeIPFromProject(ip_id, project_id) {
  console.log("sorry there's no backend");
}

export function archiveProject(project_id) {
  console.log("sorry there's no backend");
}

export function unarchiveProject(project_id) {
  console.log("sorry there's no backend");
}

export function deleteProject(project_id) {
  console.log("sorry there's no backend");

  return project_id;
}

export function updateWorkflow(workflow, project_id) {
  console.log("sorry there's no backend");
}

export function addProjectSection(project_id, section_heading, section_body) {
  console.log("sorry there's no backend");

  let section = { heading: section_heading, body: section_body };
  return section;
}

export function createProject(project_title, project_description, scouts) {
  console.log("sorry, there's no backend");
  let temp = {
    id: "42",
    projectTitle: "Archived Project Forty-two",
    projectDescription: "This is where the projects go to die",
    scouts: [
      { name: "John Doe", id: "0", joinDate: "11/2/2019" },
      { name: "Jamie Smith", id: "1", joinDate: "11/2/2019" },
      { name: "Eddy Johnson", id: "2", joinDate: "11/2/2019" }
    ],
    workflow: [
      { id: "0", label: "Send Initial Contact Email" },
      { id: "1", label: "Review Non Confidential Information" },
      { id: "2", label: "Internal Review & Validation" },
      { id: "3", label: "Send NDA" },
      { id: "4", label: "Review Confidential Information" },
      { id: "5", label: "Enter Intro Contract Negotiation" }
    ],
    tags: ["tag one", "tag two", "tag three", "tag four"],
    count: "12",
    publishDate: "November 2nd, 2019",
    lastUpdate: "12 hours ago",
    archived: true,
    ip: [0, 5, 6],
    similar: ["0", "1", "2", "3", "4"],
    collections: [
      { heading: "Sample section", body: "this is the sample text" }
    ],
    searches: [
      {
        name: "Filter A",
        filters: [
          ["Universities", "located at the", "", ["East coast"]],
          ["Tags", "where the models", "include any of", "Solid Tumor"]
        ],
        results: "506"
      },
      {
        name: "Filter B",
        filters: [
          ["Universities", "located at the", "", ["East coast"]],
          ["Tags", "where the models", "include any of", "Solid Tumor"]
        ],
        results: "609"
      },
      {
        name: "Filter C",
        filters: [
          ["Universities", "located at the", "", ["East coast"]],
          ["Tags", "where the models", "include any of", "Solid Tumor"]
        ],
        results: "607"
      }
    ]
  };

  temp.projectDescription = project_description;
  temp.projectTitle = project_title;
  // TODO doesn't handle scouts bc only passes in ID

  return temp;
}
