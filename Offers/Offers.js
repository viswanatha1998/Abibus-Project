import React, {Component} from "react";

import './Offers.css';

class Offers extends Component{

    render(){
        return(
            <div>
            <div className='container'>
            
            <div class="off-col1 light-border">
					<img src="https://static.abhibus.com/busgallery/offerbanners/Oct2021/14/1634216696-325x135.png" alt="bus offers" title="Get 100% Upto Rs.250 Assured Cashback" class="img-responsive" />
					  <div class="of-details">
					     <h4>Get 100% Upto Rs.250 Assured Cashback</h4>
					      <label for="modal-32">More Details</label>
                      </div>
			</div>
            <div class="off-col1 light-border">
					<img src="https://static.abhibus.com/busgallery/offerbanners/Nov2021/08/1636375365-325x135.png" alt="bus offers" title="Diwali Offer:  Save Upto Rs.500" class="img-responsive" />
					  <div class="of-details">
					     <h4>Dasara &amp; Diwali Offer:  Save Upto Rs.500</h4>
					     <label for="modal-34">More Details</label>
                      </div>
			</div>
            <div class="off-col1 light-border">
					<img src="https://static.abhibus.com/busgallery/offerbanners/Oct2021/31/1635683183-325x135.png" alt="bus offers" title="Get Upto Rs.150 Instant Discount with Simpl" class="img-responsive"/>
					<div class="of-details">
					    <h4>Get Upto Rs.150 Instant Discount with Simpl</h4>
					    <label for="modal-36">More Details</label>
                     </div>
		    </div>
            <div class="off-col1 light-border">
					<img src="https://static.abhibus.com/busgallery/offerbanners/Oct2021/17/1634447753-Mobile_Offers Page-325X135.png" alt="bus offers" title="Get Rs.150 Assured Cashback on LazyPay" class="img-responsive"/>
					  <div class="of-details">
					     <h4>Get Rs.150 Assured Cashback on LazyPay</h4>
					     <label for="modal-38">More Details</label>
                      </div>
			</div>



             
            </div>
        </div>
        )
    }
}
export default Offers;