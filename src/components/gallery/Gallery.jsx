import React, { Component } from "react";
import GalleryNav from "./GalleryNav";
import GalleryView from "./GalleryView";
import { paginate } from "../../utils/paginate";

class Gallery extends Component {
  state = {
    pageSize: 6,
    currentPage: 1,
    search: "",
    sort: "",
    displayArchived: false,
    added: [],
    deleted: [],
  };

  handlePageChange = direction => {
    if (direction === "next") {
      this.setState({ currentPage: this.state.currentPage + 1 });
    } else if (direction === "prev") {
      this.setState({ currentPage: this.state.currentPage - 1 });
    }
  };

  handleItemsPerPageUpdate = items => {
    console.log(items);
    if (items < 3 || items > 18) {
      return;
    }

    this.setState({ pageSize: items });
  };

  handleSortUpdate = sort => {
    console.log(sort);
    this.setState({ sort });
  };

  handleSearchUpdate = search => {
    console.log(search);
    this.setState({ search });
  };

  handleArchiveUpdate = () => {
    this.setState({ displayArchived: !this.state.displayArchived });
  };

  handleNewProject = newProject => {
    const added = [newProject, ...this.state.added];
    this.setState({added});
  }

  handleDeleteProject = project_id => {
    const deleted = [project_id, ...this.state.deleted];
    this.setState({deleted});
  }

  render() {
    const { search, sort, currentPage, pageSize, displayArchived, added, deleted } = this.state;

    let content = this.props.getContent(displayArchived, search, sort);
    content = [...added, ...content]
    content = content.filter(c => deleted.indexOf(c.id) === -1 )

    const paginated = paginate(content, currentPage, pageSize);

    let galleryType;
    if (!this.props.archive) {
      galleryType = "IPCardGallery p-3";
    } else if (!this.state.displayArchived) {
      galleryType = "ProjectCardGalley p-3";
    } else {
      galleryType = "archiveProjectCardGallery p-3";
    }

    return (
      <div className={galleryType}>
        <GalleryNav
          pageSize={this.state.pageSize}
          itemsCount={content.length}
          currentPage={this.state.currentPage}
          onPageChange={this.handlePageChange}
          archive={this.props.archive}
          displayArchived={this.state.displayArchived}
          addProject={this.props.newProject}
          onNewProject={this.handleNewProject}
          title={this.props.title}
          onSortUpdate={this.handleSortUpdate}
          onSearchUpdate={this.handleSearchUpdate}
          onArchiveUpdate={this.handleArchiveUpdate}
          onItemsPerPageUpdate={this.handleItemsPerPageUpdate}
        />
        <GalleryView
          content={paginated}
          displayArchived={this.state.displayArchived}
          workflow={this.props.workflow}
          onDeleteProject={this.handleDeleteProject}
        />
      </div>
    );
  }
}

export default Gallery;
