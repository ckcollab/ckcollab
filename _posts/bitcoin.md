---
title:  "Bitcoin and disruption"
date: 2019-02-12 00:00:00 +0800
excerpt_separator: <!--more-->
---

Like many companies, CKC has been infested with at least one of "those guys" who are way into Bitcoin. _(looking at you Eric)_

In this post: what Bitcoin is and how CKC hopes to make innovative, disruptive, and buzz-wordy applications
based on this newfangled digital platform. Eric's appreciation for Bitcoin was magnified by impactful experiences while doing work
for the United Nations.

<!--more-->


## What is Bitcoin?

Bitcoin is a global consensus network, using tokens called Bitcoins distributed during expensive mining that proves some significant
effort was exerted. More simply: someone took a lot of electricity and hardware to calculate some random number and won a small lottery,
giving them Bitcoin.

This lottery ensures the state of the Bitcoin network. As the network grows the mining power behind it makes it more secure, in our case
right now it costs about $4k in electricity to make a single Bitcoin. It is impossible to generate a Bitcoin "for free."

This process continues without the permission of any organization, a free market approach to currency. As the article continues, we'll discuss
some of the upsides and downsides of Bitcoin in its current state.


## How CKC hopes to make innovative applications


One of the main applications of Bitcoin _used_ to be microtransactions. In comparison to Paypal, which takes 2% + $0.30 in many cases, Bitcoin
_used_ to only be pennies. Then during the huge swing up in transaction fees back in 2017, it cost as much as $100 to publish a Bitcoin
transaction. Although I firmly believe the network suffered a spam attack, it showed a weakness in a _broadcast_ system as opposed to a _unicast_
system.

Why is a "broadcast system weak?" Well, a broadcast system means every message is sent to everyone in that network. Obviously this can grow out of
control and not scale well, as every person on the network is another node that must receive a message, and every message sent must be received
by everyone. This is great to find network consensus (agreement between nodes in the network) but it is extremely expensive, space in the blockchain
is precious.

A unicast system is superior for small transactions, because the message is only directed between 2 peers. This means that you lose out consensus
but can scale to infinity.

So, since Bitcoin writes _every single transaction_ to the blockchain, how can we get it to scale and defeat a future network spam attack?! Hold
onto your seats, because the next section explains...!


## What is ready for disruption?

The answer: microtransactions, via the "Lightning Network." Lightning Network combines the best properties of broadcast (strong network consensus) and unicast.


This is done by timelocking Bitcoin into the Lightning Network and then spending them peer-to-peer in a unicast way. Boom! We can have transactions
not just for fractions of a penny, but for _free!_ Imagine how much benefit Amazon will get when every transaction it does has 0 fees.

The possibilities for disruption, by using Lightning Network, are immense. It's very possible in the future you are streamed your salary
day and night, instead of having to wait every 2 weeks.


## Banking the unbanked?

One of the most amazing opportunities in Bitcoin is in the developing world. So many people are left underserved. There are millions of opportunities
being lost in terms of small business ideas, gaining home ownership, acquiring some secondary education, etc.

The world would love to give liquidity to these places, often times it is one of the best ways to inject life into communities. Sadly, sometimes
when donations are made to an area they can adversely effect local markets. For example, if you are a goat farmer and someone donates a thousand
goats the value of your farm and investments may go down. It may even put some small business owners out of business.

As soon as the foreign donations are gone, the local business isn't there to keep supporting the community.



## What is holding Bitcoin back?

However great the Lightning Network is right now, Bitcoin still has many weaknesses.

### Hard to develop on

Using Bitcoin is hard enough, developing with it can be quite scary at first. Not only can you have an off-by-one error or a simple typo screw you
over, you often have to download huge blockchains and reprocess/refactor as processing methods and interfaces change.

### Very little adoption

Since so few people are using Bitcoin now, all of this great Lightning Network potential is rather limited. This may be a blessing in disguise, though,
because during the last wave of adoption Bitcoin wass not quite ready to scale yet.

With all of that said, every time Bitcoin gains adoption and plummets, it grows in power -- really. Bitcoin has
[antifragile](https://en.wikipedia.org/wiki/Antifragile) properties. Every time it is attacked, a fix is implemented that makes it stronger, faster,
and smarter.

### Not a unit of account, yet

Bitcoin is horribly volatile. Until this is, uh, fixed(?) it will be hard to make loans in Bitcoin. However, things like
[Coinbase's Stablecoin USDC](https://www.coinbase.com/usdc) may make this easier in the future. _Especially_ combined with Lightning Network
technology that allows instantly swapping Bitcoin for other tokens, like USDC.


# We're excited!

However weird Eric is for liking Bitcoin so much, we're excited about all of the possibilities. And, if it's not Bitcoin, surely some
cryptocurrency will reduce friction in markets and provide services to the unbanked.

Have a Bitcoin app that needs building? <a href="mailto:hello@ckcollab.com>Contact us!</a>