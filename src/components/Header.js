import React from "react";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";

function Header({ onSearch }) {
  return (
    <Navbar bg="blue" variant="blue">
      <Navbar.Brand>Movie Search</Navbar.Brand>
      <Form inline className="ml-auto">
        <FormControl
          type="text"
          placeholder="Search for a movie"
          className="mr-sm-2"
          onChange={(e) => onSearch(e.target.value)}
        />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
  );
}

export default Header;
