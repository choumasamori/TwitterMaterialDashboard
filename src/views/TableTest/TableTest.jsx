import React, {Component} from "react";
import { Grid } from "material-ui";

import { RegularCard, Table, ItemGrid, Button } from "components";
import './TableTest.css';



/*
function contentClass(isShow) {
  if (isShow) {
    return "ItemGrid";
  }
  return "ItemGrid invisible";
}



  /*constructor(props) {
    super(props);
    this.state = {isShow: true};
    this.handleClick = this.handleClick.bind(this);
  }*/

  /*handleClick() {
    this.setState(function(prevState) {
      return {isShow: !prevState.isShow};
    });
  }*/


  
  //    <div className='control' onClick={this.handleClick}>Click me to toggle</div>
  //   <div className={contentClass(this.state.isShow)}>


  export class TableTest extends Component {
    
  showDetails(id) {
    if ( !document.getElementById(id).classList.contains('visible')  ) {
			document.getElementById(id).setAttribute('class', 'visible');
			document.getElementById(id).style.display = "block";
		}
		else {
			document.getElementById(id).className = '';
			document.getElementById(id).style.display = "none";
		}
  }

  test = () => {

  }

  render(){
    return(
   <Grid container>
     <Button color="primary" onClick = {() => this.showDetails("table1")} type="submit">Show/Hide</Button>
        <ItemGrid xs={12} sm={12} md={12}>
        <div id="table1">
          <RegularCard
            cardTitle="Simple Table"
            cardSubtitle="Here is a subtitle for this table"
            content={
              <Table
                tableHeaderColor="primary"
                tableHead={["Name", "Country", "City", "Salary"]}
                tableData={[
                  ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"],
                  ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"],
                  ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"],
                  ["Philip Chaney", "Korea, South", "Overland Park", "$38,735"],
                  ["Doris Greene", "Malawi", "Feldkirchen in Kärnten", "$63,542"],
                  ["Mason Porter", "Chile", "Gloucester", "$78,615"]
                ]}
              />
            }
          />
          </div>
        </ItemGrid>


      <Button color="primary" onClick={()=>this.showDetails("table2")} type="submit">Show/Hide</Button>
      <ItemGrid xs={12} sm={12} md={12}>
      <div id="table2">
        <RegularCard
          plainCard
          cardTitle="Table on Plain Background"
          cardSubtitle="Here is a subtitle for this table"
          content={
            <Table
              tableHeaderColor="primary"
              tableHead={["ID", "Name", "Country", "City", "Salary"]}
              tableData={[
                ["1", "Dakota Rice", "$36,738", "Niger", "Oud-Turnhout"],
                ["2", "Minerva Hooper", "$23,789", "Curaçao", "Sinaai-Waas"],
                ["3", "Sage Rodriguez", "$56,142", "Netherlands", "Baileux"],
                [
                  "4",
                  "Philip Chaney",
                  "$38,735",
                  "Korea, South",
                  "Overland Park"
                ],
                [
                  "5",
                  "Doris Greene",
                  "$63,542",
                  "Malawi",
                  "Feldkirchen in Kärnten"
                ],
                ["6", "Mason Porter", "$78,615", "Chile", "Gloucester"]
              ]}
            />
          }
        />
      </div>
      </ItemGrid>
    </Grid>
    );
  }
}

export default TableTest;
