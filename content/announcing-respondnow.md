---
title: RespondNow - An Open Source Slack App For Managing Incidents
date: 30th August, 2024
author: Umasankar Mukkara
author_linkedin: https://www.linkedin.com/in/uma-mukkara/
tag: RespondNow
image: /blogs/announcing_respondnow.svg
author_image: /blogs/umasankar_mukkara.png
image_alt: RespondNow
summary: We are thrilled to announce that RespondNow comes into existence to help achieve the community centric approach to responding to incidents.
---

# RespondNow - An Open Source Slack App For Managing Incidents

For a long time now, all organizations have been managing incidents to the best of their abilities. There are choices to select when it comes to the tools to help in the incident management. However, the modern systems have been demanding tools that are easier to operate, provide immediate value and open source if possible. Open source ecosystem has been thriving in this decade with Kubernetes driving the cloud native architecture adoption. A multitude of tools have emerged and made their mark in the cloud native space surrounding the use of Kubernetes. Now Kubernetes is no more a technology that fascinates, but it is a technology that is already driving innovation in most organizations. Though, in the technology adoption cycle, Kubernetes has crossed early majority sometime ago, but the complexities while scaling and the emergence of AI and generative AI technologies have made the management of service resilience a focus point for many organizations.

Organizations have adopted cloud native technology, serving the needs of their customers and facing uphill battle while improving their resilience end game to get better in the eyes of their end users. There are a couple of key reasons the innovation around improving the resilience is being slowed down in the organizations -

1. Focus has been on the speed of delivery of the new technology. The developers have become good at being cloud native in a true sense. However, the toil around recovering or avoiding service outages continues to increase and when the complexity grows with scale. The developer efficiency is being hit while meeting the demands of the quick incident response and recovery

2. Resilience has long been seen as an Ops responsibility. Though the shift-left pattern has spilled into the service resilience in recent times especially in the cloud native space, the bandwidth allocated for developers to spend time in the post-incident recovery continues to be miniscule.

The need of the hour is to enable developers to spend more time in training themselves better to the incidents, and do what is required in the code for faster incident response. Developers and SREs need to be able to share and receive the best practices in the incident response process among the larger cloud native community. Hence, the need arises for a truly open source approach to the development of cloud native runbooks.

## Introducing RespondNow

We are thrilled to announce that RespondNow comes into existence to help achieve the community centric approach to responding to incidents. RespondNow project's focus is less on how to create and process the workflow of incidents but more on enabling the community to build reusable runbooks and eventually achieve faster response times or recovery times.

#### What is RespondNow?

It is an open source incident management server that runs on Kubernetes managed by you. It comes with a slack application for collaborating on the incident response. RespondNow is licensed under Apache2.

#### RespondNow goals:

- Build a free and easy to use incident management tool that operates entirely in your slack workspace. Make the collaboration around incident response native to your existing mode of collaboration.

- Bring together a community of developers and SREs that contribute to the buildup of reusable runbooks.

We have announced the availability of the first version of RespondNow with which you can start the incident creation and workflow process using your Kubernetes space and Slack. Feel free to give it a try and become part of the RespondNow community.

We would love to see you becoming part of the RespondNow community. Give us a star [here](https://github.com/respondnow/respond) and join the **respond-now** slack channel on the [CNCF slack community](https://slack.cncf.io).
