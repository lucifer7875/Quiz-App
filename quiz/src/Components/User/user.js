import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {},
      DataisLoaded: false,
    };
  }
  componentDidMount() {
    fetch(`http://localhost:8000/user`)
      .then((res) => res.json())
      .then((allData) => {
        console.log(allData);
        this.setState({
          allItems: allData,
          DataisLoaded: true,
        });
      });
  }
  render() {
    const { allItems } = this.state;
    let parsedList;
    if (Array.isArray(allItems)) {
      console.log(allItems);

      parsedList = allItems.map((admin, index) => (
        <table>
          <th scope="row">
            <tr>
              No.{index + 1} &nbsp;
              {admin.AddyourQuestion}
            </tr>
          </th>
          <tbody>
            A.{admin.OptionOne}
            <br />
            B.{admin.OptionTwo}
            <br />
            C.{admin.OptionThree}
            <br />
          </tbody>
        </table>
      ));
    }
    
    return (
      <div className="Question">
        <h3>Question</h3>
        <hr />
        <table className="Quiz-2022">
          <tbody>{parsedList}</tbody>
        </table>
      </div>
    );
  }
}

export default User;
