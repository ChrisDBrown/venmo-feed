# Venmo Live Payments

Quickly thrown together to show what Venmo allows access to if you don't lock down the privacy settings on your account. This isn't everything - photos & comments are available, but this is the most critical info. The only thing really missing is exact payment value.

Previously this would load each payment as it occured, but Venmo have now updated their API to always load ~15 payments with heavy caching, so it's a very small subset of public payments being shown. This is a good thing, but still not ideal. It's clear most people don't realise that this information is public. A few articles worth reading for better analysis than I can put together:
- The Guardian: [
Venmo: how the payment app exposes our private lives](https://www.theguardian.com/world/2018/jul/17/venmo-payments-app-default-privacy-settings-public-information)
- Wired: [I Scraped Millions of Venmo Payments. Your Data Is at Risk](https://www.wired.com/story/i-scraped-millions-of-venmo-payments-your-data-is-at-risk/)
- TechCrunch: [Millions of Venmo transactions scraped in warning over privacy settings](https://techcrunch.com/2019/06/16/millions-venmo-transactions-scraped/)