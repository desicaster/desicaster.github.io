import React, { Component } from "react";
import { Modal, ModalBody } from "reactstrap";
import ButtonTable from "../common/ButtonTable";
import { Input } from "antd";
import axios from "axios";

class FilterModal extends Component {
  state = { categories: [], currentCategory: "", currentTypes: [] };

  async componentDidMount() {
    const response = await axios.get(
      "https://desicaster.herokuapp.com/api/categories"
    );
    const categories = response.data;
    const currentCategory = categories[0];

    const type_response = await axios.get(
      "https://desicaster.herokuapp.com/api/types/" + currentCategory
    );
    const currentTypes = type_response.data;
    this.setState({ categories, currentCategory, currentTypes });
  }

  handleCategoryTap = async currentCategory => {
    const type_response = await axios.get(
      "https://desicaster.herokuapp.com/api/types/" + currentCategory
    );
    const currentTypes = type_response.data;
    this.setState({ currentCategory, currentTypes });
  };

  handleTypeTap = type => {
    this.props.addFilter(type);
    this.props.toggleModal();
  };

  render() {
    const { show, toggleModal } = this.props;
    const { Search } = Input;

    return (
      <Modal isOpen={show} toggle={toggleModal} centered={true}>
        <ModalBody className="p-3">
          <h5>Add Filter</h5>
          <hr />
          <Search
            placeholder="Seach Tags"
            onSearch={value => console.log(value)}
            className="mb-3"
          />
          <div className="flex">
            <div className="flex-col modal-col">
              <ButtonTable
                elements={this.state.categories}
                handleTap={this.handleCategoryTap}
                selectedElement={this.state.currentCategory}
              />
            </div>
            <div className="flex-col modal-col">
              <ButtonTable
                elements={this.state.currentTypes}
                handleTap={this.handleTypeTap}
              />
            </div>
          </div>
        </ModalBody>
      </Modal>
    );
  }
}

export default FilterModal;
