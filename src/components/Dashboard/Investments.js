import Investment from "./Investment";

const investments = [
  {
    folio_number: "ABC112212",
    type: "Mutual Fund",
    subtype: "SIP",
    fund_name: "ABC_Fund",
    fund_type: "Smmal Cap",
    total_invested: 1000000,
    current_nav: 100,
    nuber_units: 11200,
    year_1_returns: -0.05,
    year_3_returns: 0.15,
    year_5_returns: 0.11,
    investment_details: [
      {
        trx_id: "TRX0001",
        purchase_date: "01-01-2021",
        nav_asofDate: 50,
        sip_amount: 5000,
        number_of_units: 100,
      },
      {
        trx_id: "TRX0002",
        purchase_date: "01-02-2021",
        nav_asofDate: 50,
        sip_amount: 5000,
        number_of_units: 100,
      },
      {
        trx_id: "TRX0003",
        purchase_date: "01-03-2021",
        nav_asofDate: 50,
        sip_amount: 5000,
        number_of_units: 100,
      },
      {
        trx_id: "TRX0004",
        purchase_date: "01-04-2021",
        nav_asofDate: 50,
        sip_amount: 5000,
        number_of_units: 100,
      },
    ],
  },
  {
    folio_number: "ABC112213",
    type: "Mutual Fund",
    subtype: "SIP",
    fund_name: "ABC_Fund",
    fund_type: "Smmal Cap",
    total_invested: 1000000,
    current_nav: 100,
    nuber_units: 11200,
    year_1_returns: -0.05,
    year_3_returns: 0.15,
    year_5_returns: 0.11,
    investment_details: [
      {
        trx_id: "TRX0001",
        purchase_date: "01-01-2021",
        nav_asofDate: 50,
        sip_amount: 5000,
        number_of_units: 100,
      },
      {
        trx_id: "TRX0002",
        purchase_date: "01-02-2021",
        nav_asofDate: 50,
        sip_amount: 5000,
        number_of_units: 100,
      },
      {
        trx_id: "TRX0003",
        purchase_date: "01-03-2021",
        nav_asofDate: 50,
        sip_amount: 5000,
        number_of_units: 100,
      },
      {
        trx_id: "TRX0004",
        purchase_date: "01-04-2021",
        nav_asofDate: 50,
        sip_amount: 5000,
        number_of_units: 100,
      },
    ],
  },
  {
    folio_number: "ABC112214",
    type: "Mutual Fund",
    subtype: "SIP",
    fund_name: "ABC_Fund",
    fund_type: "Smmal Cap",
    total_invested: 1000000,
    current_nav: 100,
    nuber_units: 11200,
    year_1_returns: -0.05,
    year_3_returns: 0.15,
    year_5_returns: 0.11,
    investment_details: [
      {
        trx_id: "TRX0001",
        purchase_date: "01-01-2021",
        nav_asofDate: 50,
        sip_amount: 5000,
        number_of_units: 100,
      },
      {
        trx_id: "TRX0002",
        purchase_date: "01-02-2021",
        nav_asofDate: 50,
        sip_amount: 5000,
        number_of_units: 100,
      },
      {
        trx_id: "TRX0003",
        purchase_date: "01-03-2021",
        nav_asofDate: 50,
        sip_amount: 5000,
        number_of_units: 100,
      },
      {
        trx_id: "TRX0004",
        purchase_date: "01-04-2021",
        nav_asofDate: 50,
        sip_amount: 5000,
        number_of_units: 100,
      },
    ],
  },
];

const Investments = () => {
  return (
    <div>
      {investments.map((invest) => (
        <Investment key={invest.folio_number} data={invest} />
      ))}
    </div>
  );
};

export default Investments;
