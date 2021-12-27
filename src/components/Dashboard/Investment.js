// import Container from 'react-bootstrap/Container';
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "../UI/Card";
import classes from "./Investment.module.css";
import Trasactions from "./Transaction";

const Investment = (props) => {
    // console.log(props.key)
  const [showTransactions, setShowTransactions] = useState(false);

  const onTrxClickHandeler =()=>{
    setShowTransactions(!showTransactions)
  }
  return (
    <Card>
      <Container>
        <Row className={classes.folio}>
          Folio Number : {props.data.folio_number}
        </Row>
        <Row className={classes.foliolabels}>
          <Col>Name</Col>
          <Col>Investd Amount</Col>
          <Col>Present Value</Col>
        </Row>
        <Row className={classes.foliovalues}>
          <Col>{props.data.fund_name}</Col>
          <Col onClick={onTrxClickHandeler}>{props.data.total_invested.toLocaleString()}</Col>
          <Col>
            {(props.data.current_nav * props.data.nuber_units).toLocaleString()}
          </Col>
        </Row>
        <Row className={classes.foliolabels}>
          <Col>NAV</Col>
          <Col>Number Of Units</Col>
          <Col>Absolute Returns</Col>
          <Col>XIRR</Col>
        </Row>
        <Row className={classes.foliovalues}>
          <Col>{props.data.current_nav.toLocaleString()}</Col>
          <Col>{props.data.nuber_units.toLocaleString()}</Col>
          <Col>
            {((props.data.current_nav * props.data.nuber_units -
              props.data.total_invested) /
              props.data.total_invested) *
              100}
            %
          </Col>
          <Col>10%</Col>
        </Row>
        { showTransactions &&
          <Row className={classes.trxClass}>
            <Col>Trx Date</Col>
            <Col>Amount Invested</Col>
            <Col>NAV</Col>
            <Col>Number Of Units</Col>
          </Row>
        }
        {showTransactions && props.data.investment_details.map((trx) => (
          <Trasactions
            key={trx.trx_id}
            purchase_date={trx.purchase_date}
            nav_asofDate={trx.nav_asofDate}
            sip_amount={trx.sip_amount}
            number_of_units={trx.number_of_units}
          />
        ))}
      </Container>
    </Card>
  );
};

export default Investment;
