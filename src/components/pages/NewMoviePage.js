import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Form, Image } from "semantic-ui-react";
import InlineError from "../InlineError";
import {onNewMovieSubmit} from '../../actions/newMovieActions'

class NewMoviePage extends Component {
  state = {
    title: "",
    cover: "",
    errors: {},
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    // console.log(this.state)
  };

  onSubmit = () => {
    const errors = this.validate();
    this.setState({ errors });
    //console.log(errors)
  };

  validate = () => {
    const errMessage = {};
    if (!this.state.title) errMessage.title = "Can't be null(Title)";
    if (!this.state.cover) errMessage.cover = "Can't be null(Cover)";
    return errMessage;
  };

  render() {
    const { errors } = this.state;
    console.log(this.props);
    return (
      <div>
        <h2>New Movie Form</h2>
        <Form onSubmit={this.onSubmit}>
          <Form.Field error={!!errors.title}>
            <label>Title</label>
            <input
              id="title"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              placeholder="Title ..."
            />
            {errors.title && <InlineError message={errors.title} />}
          </Form.Field>
          <Form.Field error={!!errors.cover}>
            <label>Cover Img URL</label>
            <input
              id="cover"
              name="cover"
              value={this.state.cover}
              onChange={this.handleChange}
              placeholder="Cover Img URL ..."
            />
            {errors.cover && <InlineError message={errors.cover} />}
          </Form.Field>
          <Form.Field>
            <Image src={this.state.cover} size="small" />
          </Form.Field>
          <Button color="teal" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
const mapStateToProps = ({newMovieReducer})=>{
    return {newMovieReducer}
}

const mapDispatchToProps = {
    onNewMovieSubmit//BURADAYIZ........99
};

export default connect(mapStateToProps,mapDispatchToProps)(NewMoviePage)