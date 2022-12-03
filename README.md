# Yuu

### Inspiration  

As we progress towards a truly decentralized internet, there is an attempt to eliminate the concept of centralization in every field. There is a great idea storm among people that is bringing about new NFT, DeFi and DAO projects everyday. We felt that the advertising sector isn't discussed widely and explored by the blockchain communities which could potentially be a very important problem to solve in recent times where user privacy is an alarming concern. 

Thus, we decided to take a dive into the deep ocean of advertising in an attempt to make it a truly decentralized and trustworthy process and came up with Yuu (for you :) ).

 
### What it does?

Today we have the idea of programmatic advertising and this is majorly controlled by the two tech giants in advertising - Google and Facebook (now Meta). They have the maximum power and are responsible for arranging a match between the publishers (the websites who show the ads) and the advertisers (the companies who wish to show their ads). The publishers are not able to earn much due to a large share of the funds are being consumed by the intermediary platforms like Google and Meta. Moreover, the advertisers also do not have much transparency as for whether their ad was shown on the said publisher's website. 

Yuu provides a platform for a transparent auction and bidding process for the publisher ad slots. The advertisers are made to connect with the publisher directly and there is no middleman involved to claim huge chunks of the advertisers' money. The publishers are directly paid in xDAI, fully receiving the funds that they deserve. It is a marketplace of ad slots with a continuing model of Auction process. The advertisers may place their bids within the bid period and claim their desired ad slot. The mapping of the advertisers to relevant publishers are not made using user data which is violates privacy in the current centralised model of advertising. We have taken the approach of content-based mapping by using NLP techniques to evaluate a similarity score between the advertiser and publisher. Based on the score, the results will be sorted on the marketplace and there are few other filters based on target demographic, country and tags. This will ensure maximum conversion rates and the users would be shown relevant ads without breaching their privacy. The smart contract ensures a smooth and transparent auction process with timely funds transfer. The bidding process is as follows: The auction is opened by the publisher and their ad slot is put for sale. Each interested advertiser can place their bid. The highest bidder wins the ad slot and their ad shown for some days as specified by the publisher. The other advertisers can however continue bidding for the ad slot evenafter the auction period provided they pay an amount 20% greater than the highest bid to make sure that the publisher gets the maximum advantage and the auction is more competitive.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           




### How we built it


The auction smart contract was written in Solidity and deployed on the Gnosis chain. The frontend of the web application was made on React and the backend was made on Node.js. IPFS was used to store the ad slot details during the auction. Push protocol was used for building a notification system to alert the publishers when a new bid is placed and the advertisers when their bid contract is ended. Spacy and NLTK libraries were used for the NLP tasks.

### Challenges that we ran into:

- Deploying the smart contract on the Gnosis chain
- Dealing with frequent Metamask RPC errors which automatically got resolved after a couple hours
- Using Push protocol with the Gnosis chain since it is only made for Polygon and Ethereum chains. We made the user switch to the Goerli testnet to subscribe to the channel and later switch back to Chiado chain while making Auction transactions.

 

### Future scope: 

This is just one part of a potentially huge project in the advertising industry. We just tried to set up a transparent auction platform not using user data for this hackathon. Future scope would be to expand this project by including techniques to mitigate fraud in this decentralized network and ensure that there are no bots on either end.


### How to run it
- [x] Clone the repository to your local directory
 - `git clone https://github.com/abhishek0405/Yuu.git`

- [x] Open terminal and cd to the frontend, backend and ml directories.
- [x] Install packages for frontend and backend folders by typing
- `npm start`

- [x] Run this command on frontend and backend terminals:.
- `npm start`
- [x] For ml directory  run `uvicorn main:app --reload` after installing uvicorn via pip

Now you can see our app running on localhost:3000!
 
### Try our website at:



### Built With 

-	Solidity
-	Gnosis chain
-	Push Protocol
-	IPFS and Filecoin
-   Web3.js
-   Ethers js
-	React
-   Node.js
-   MongoDB
-   Spacy
-   NLTK

### Website screenshots
<br>
Homepage
<p  align="center"><img height= "600" width = "400" src = "https://github.com/abhishek0405/Alzheimers-App/blob/main/readme_images/homepage.jpg"></p>
<br>
News section
<p  align="center"><img height= "600" width = "400" src = "https://github.com/abhishek0405/Alzheimers-App/blob/main/readme_images/news.jpg"></p>
<br>


### Team 😊
- [Abhishek Anantharam](https://github.com/abhishek0405) 
- [Vishaka Mohan](https://github.com/vishaka-mohan)


