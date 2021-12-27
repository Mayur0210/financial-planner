import { Row, Col } from "react-bootstrap";
import classes from "./Investment.module.css";
const Transactions = (props) => {
  return (
    // <Container>
    //   <Row className={classes.foliolabels}>
    //     <Col>Trx Date</Col>
    //     <Col>Amount Invested</Col>
    //     <Col>NAV</Col>
    //     <Col>Number Of Units</Col>
    //   </Row>
      <Row className={classes.foliovalues}>
        <Col>{props.purchase_date}</Col>
        <Col>{props.sip_amount.toLocaleString()}</Col>
        <Col>{props.nav_asofDate}</Col>
        <Col>{props.number_of_units}</Col>
      </Row>

  );
};


export default Transactions
// trx_id: "TRX0002",
// purchase_date: "01-02-2021",
// nav_asofDate: 50,
// sip_amount: 5000,
// number_of_units: 100,
