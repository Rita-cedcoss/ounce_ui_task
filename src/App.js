import "./App.css";
import {
  Button,
  Card,
  Grid,
  List,
  Modal,
  PageHeader,
  TextStyles,
} from "@cedcommerce/ounce-ui";
import FormLogin from "./OunceTask/FormLogin";
import { useEffect, useState } from "react";

function App() {
  const [userData, setUserdata] = useState();
  const [ismodal, setIsmodal] = useState(false);
  const [modalData, setModaldata] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setUserdata(data));
  }, []);
  return (
    <div className="App">
      <FormLogin />
      {/* Grid Component */}
      <Card extraClass="outerForm">
        <PageHeader title="Grid Data" />
        <Grid
          columns={[
            {
              align: "center",
              dataIndex: "userId",
              key: "userId",
              title: "UserId",
              width: 100,
            },
            {
              align: "center",
              dataIndex: "title",
              key: "title",
              title: "Title",
              width: 100,
            },
            {
              align: "center",
              dataIndex: "body",
              key: "body",
              title: "Body",
              width: 100,
            },
            {
              align: "center",
              key: "operation",
              title: "Action",
              width: 100,
              render: (e) => (
                <Button
                  content="Action"
                  halign="Equal"
                  iconAlign="left"
                  length="none"
                  onClick={() => {
                    setIsmodal(true);
                    setModaldata(e);
                  }}
                  tabIndex="1"
                  thickness="thin"
                  type="TextButton"
                />
              ),
            },
          ]}
          dataSource={userData}
        />
      </Card>
      {/* table row data display */}
      <Modal
        close={() => {
          setIsmodal(false);
        }}
        heading="Modal Title"
        modalSize="medium"
        overlayClose
        open={ismodal}
      >
        <List type="square">
          <TextStyles textcolor="light">Id:{modalData.id}</TextStyles>
          <TextStyles textcolor="light">UserId:{modalData.userId}</TextStyles>
          <TextStyles textcolor="light">Title:{modalData.title}</TextStyles>
          <TextStyles textcolor="light">
            Discription:{modalData.body}
          </TextStyles>
        </List>
      </Modal>
    </div>
  );
}

export default App;
