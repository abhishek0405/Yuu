// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;




contract YuuAuction {
    event StartAuction(string hash);
    event BidAdSlot(address indexed sender, uint amount);
    event Withdraw(address indexed bidder, uint amount);
    event EndAuction(address winner, uint amount);



    struct AdInfo {

        
        address payable seller;
        uint endAt;
        bool started;
        bool ended;
        uint lastBid;

        address  highestBidder;
        string productId;
        uint  highestBid;
        mapping(address => uint) bids;
        mapping(string => address)  ads;
        uint totalMoney;


    }


    mapping(string => AdInfo) public adSlots; //hash -> object with full data about that ad bid
    address public owner;

    
    //adslot : {publisher , start, end, ended, last bid, }

    constructor(
        
    ) {

        //AdInfo memory currentEntry;

        owner = msg.sender; //us
        
        //adSlots[_adSlotHash] = currentEntry;
    }

    function start(string memory _adSlotHash, uint _highestBid) external {

        // when it starts we take the adslot hash and the highest bid
        // we make the seller uska msg.sender = publisher
        //aise hi baaki fields take


        require(!adSlots[_adSlotHash].started, "bid has already started");
        //require(msg.sender == adSlots[_adSlotHash].seller, "user is not the seller");
        adSlots[_adSlotHash].seller = payable(msg.sender);
        adSlots[_adSlotHash].highestBid = _highestBid;

        adSlots[_adSlotHash].started = true;
        
        adSlots[_adSlotHash].endAt = block.timestamp + 1 minutes;
        adSlots[_adSlotHash].lastBid = block.timestamp;

        emit StartAuction(_adSlotHash);
    }

    function bid(string memory _adSlotHash, string memory _productId) external payable {

        //bid bhi waise hi - we take ad slot hash - use corresponding we update the details


        require(adSlots[_adSlotHash].started, "not started");
        if(block.timestamp < adSlots[_adSlotHash].endAt){
            require(msg.value > adSlots[_adSlotHash].highestBid, "amount less than highest bid");
             adSlots[_adSlotHash].totalMoney += msg.value;
        }
        else{
            require(msg.value > (adSlots[_adSlotHash].highestBid + adSlots[_adSlotHash].highestBid/5), "auction ended, amount not 20% greater than highest bid");
            uint c = ((block.timestamp - adSlots[_adSlotHash].endAt)/4 days)*adSlots[_adSlotHash].highestBid;
            adSlots[_adSlotHash].seller.transfer(c);
            payable(adSlots[_adSlotHash].highestBidder).transfer(adSlots[_adSlotHash].highestBid - c);
            adSlots[_adSlotHash].totalMoney += c;

        }
        

        if (adSlots[_adSlotHash].highestBidder != address(0)) {
            adSlots[_adSlotHash].bids[adSlots[_adSlotHash].highestBidder] += adSlots[_adSlotHash].highestBid;
        }

        adSlots[_adSlotHash].highestBidder = msg.sender;
        adSlots[_adSlotHash].highestBid = msg.value;
        adSlots[_adSlotHash].lastBid = block.timestamp;
        adSlots[_adSlotHash].productId = _productId;

        emit BidAdSlot(msg.sender, msg.value);
    }

    function withdraw(string memory _adSlotHash) external {
        uint bal = adSlots[_adSlotHash].bids[msg.sender];
        adSlots[_adSlotHash].bids[msg.sender] = 0;
        payable(msg.sender).transfer(bal);

        emit Withdraw(msg.sender, bal);
    }

    function end(string memory _adSlotHash) external payable {

        //end bhi same
        
        require(adSlots[_adSlotHash].started, "auction has not started");
        require(block.timestamp >= adSlots[_adSlotHash].endAt, "auction has not ended");
        //require(!adSlots[_adSlotHash].ended, "ended");

        adSlots[_adSlotHash].ended = true;

        adSlots[_adSlotHash].started = false;
        if(block.timestamp - adSlots[_adSlotHash].endAt > 1 minutes && block.timestamp - adSlots[_adSlotHash].lastBid > 1 minutes ){
            //adSlots[_adSlotHash].ads[_adSlotHash] = msg.sender;
            adSlots[_adSlotHash].seller.transfer(adSlots[_adSlotHash].highestBid);
            adSlots[_adSlotHash].totalMoney += adSlots[_adSlotHash].highestBid;
        }
         

        emit EndAuction(adSlots[_adSlotHash].highestBidder, adSlots[_adSlotHash].highestBid);
    }

    
}
