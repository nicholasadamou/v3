import React from "react";

import Article from "../../components/Article/Article";

import Articles from "../../sass/Articles";

const Papers = () => (
  <section id="papers">
    <h2 className="title">Papers</h2>
    <p className="subtitle">
      These are papers I have written over the years for school that I am proud
      of.
    </p>

    <Articles>
      {Article(
        "An Analysis of Hartwick’s Network Security",
        "There are different standards for security of networks such as: Wired Equivalent Privacy (WEP), Wi-Fi Protected Access (WPA) and Wi-Fi Protected Access version 2 (WPA2). Each protocol has their own unique way of authenticating a user into a network. Determining which protocol is the best choice for a particular organization can be challenging. Hartwick College has a total student body of approximately 1,550 students with 500 or so faculty members and staff, so keeping its user-base secure is a keen issue that its system and network administrators have to consider. The IT department at Hartwick College has utilized all of this knowledge to develop and provide a secure network for its student body and faculty.",
        "https://drive.google.com/file/d/1ev9OGrBwBsmTpfVEzqY52ORBWvDDGPz5/view?usp=sharing",
        "✏️",
        "pencil"
      )}
      {Article(
        "An in-depth analysis of WiFi Security Standards",
        "There are different standards for the security of networks such as Wired Equivalent Privacy (WEP), Wi-Fi Protected Access (WPA), and Wi-Fi Protected Access version 2 (WPA2). Each protocol has its own unique way of authenticating a user into a network. Each, however, is wrought with vulnerabilities that attackers, such as network penetration testers can exploit to gain access to a targeted network. Cornell College has a total student body of approximately 1000 students with 200 or so staff and faculty members, so so keeping its user-base secure is a keen issue that its system and network administrators have to consider. The IT department at Cornell College has utilized all of this knowledge to develop and provide a secure network for its student body and faculty.",
        "https://docs.google.com/document/d/1ovgrNgycxdKh_i00nUmBsj2Pxmv5mQQUfnCzExJhhzs/edit?usp=sharing",
        "✏️",
        "pencil"
      )}
      {Article(
        "Web Application Penetration Testing",
        "On many occasions, as a penetration tester, we will have to face a web application that would act as a gateway to the target system. Often times, these applications contain a login form, which we will have to test for weak credentials, SQL injection, etc. Burp Suite, an application that comes bundled by default with every install of Kali Linux, is used for security testing and scanning of web applications. SQLMap is another tool that comes bundled with every install of Kali Linux, and it is the go-to tool for finding and exploiting any form of SQL injection vulnerabilities. Burp Suite is primarily used to find vulnerabilities within a web application that would allow a hacker to find a pathway onto a system. In this paper, I will explain how various attacks work (e.g. brute-forcing credentials and SQL injection), as well as provide an overview of some attacks against a vulnerable web app utilizing Burp Suite and SQLMap along with their many features.",
        "https://docs.google.com/document/d/1P4-GtyJyxSpsDcjrIyp6ogLsZzMT6InJhOXrjWqkdU8/edit?usp=sharing",
        "✏️",
        "pencil"
      )}
    </Articles>
  </section>
);

export default Papers;
