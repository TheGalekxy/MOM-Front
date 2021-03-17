import React from 'react';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

class CollapsibleSection extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.togglePanel = this.togglePanel.bind(this);
    }


    togglePanel(e){
        this.setState({open: !this.state.open})
    }

    componentDidUpdate(){
        
    }

    // <ExpandLessIcon fontSize="small" />;

    render() {
      return (
      <div className='collapsible-section'>
        <div onClick={(e)=>this.togglePanel(e)} className='header'>
            {this.props.title} {this.state.open ? < ExpandLessIcon fontSize="large" /> : <ExpandMoreIcon fontSize="large" /> }
        </div>
        {this.state.open ? (
            <div className='content'>
                {this.props.children[0]}
            </div>
            ) 
            : 
            <div className='outside-content'>
                {this.props.children[1]}
            </div>
        }
      </div>
      );
    }
  }

export default CollapsibleSection;