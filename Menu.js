/**
 * Created by sashok123351 on 09.05.2016.
 */

    var goods = [
    {name : "IPhone 6", price :788 },
    {name : "Motorola nexus 5", price : 330},
    {name : "Samsung galaxy S6", price :550},
    {name : "Nokia C6-01", price :99},
    {name : "Nexus 5", price :300}
];

var Container = React.createClass({
    getInitialState : function () {
      return{
          total: 0
      }
    },
    addItem : function (price) {
this.setState({total: this.state.total + price})
    },

    render : function () {
        var self = this;
    var goods = this.props.items.map(function (item) {
       return <Goods name ={item.name} price = {item.price} addItem = {self.addItem}  />
    });

    return(
       <div className="main">
           <h1>List of goods</h1>
           {goods}
           <p className="total">Total <b>${this.state.total.toFixed(2)}</b></p>
       </div>
    )

    }
});

var Goods = React.createClass({
    getInitialState: function () {
      return {
          active : false
      }
    },
clickHandler : function () {

    var active = !this.state.active;
    this.setState({active : active});
    this.props.addItem(active ? this.props.price : -this.props.price)
},
render: function(){
    return(
        <p className={this.state.active ? "active" : ""} onClick={this.clickHandler}>
            {this.props.name} <b>${this.props.price.toFixed(2)}</b>
        </p>
    )
}
});
ReactDOM.render(
    <Container items = {goods}/>,
document.body
);
