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

For a long time now, all organizations have been managing incidents to the best of their abilities. There are choices to select when it comes to the tools to help in the incident management. However, the modern systems have been demanding tools that are easier to operate, that provide immediate value and open source if possible. Open source ecosystem has been thriving in this decade with Kubernetes driving the cloud native architecture adoption. A multitude of tools have emerged and made their mark in the cloud native space surrounding the use of Kubernetes. Kubernetes is no more a technology that fascinates, but it is a technology that is already driving innovation in most organizations. Though, in the technology adoption cycle, Kubernetes has crossed early majority sometime ago, the scaling complexities,  the emergence of AI and Generative AI technologies have made the management of service resilience a focus point for many organizations.

Organizations have adopted cloud native technology to serve the needs of their customers at a faster pace, are facing an uphill battle in improving their resilience end game resulting in suboptimal value derivation from the cloud native migration. There are a couple of key reasons the innovation around improving the resilience is becoming difficult in such the organizations -

1. Focus has been ONLY on the speed of delivery of the new technology. The developers have become good at being cloud native in a true sense. However, the toil around recovering or avoiding service outages continues to increase when the complexity grows with scale. The developer efficiency is being hit while meeting the demands of the quick incident response and recovery.

2. Resilience has long been seen as an Ops responsibility. Though the shift-left pattern has spilled into the service resilience in recent times, especially in the cloud native space, the bandwidth allocated for developers to spend time in the post-incident recovery continues to be miniscule.

The need of the hour is to enable developers to spend more time in training themselves better and do what is required in the code for faster incident response. Developers and SREs need to be able to share and receive the best practices in the incident response process among the larger cloud native community. We realized that there is an opportunity to develop many runbooks for recovering cloud native incidents in a truly open source approach that is contributed and maintained by the community. This is the primary reason for starting a new open source community and project - RespondNow.

## Introducing RespondNow

We are thrilled to announce that RespondNow comes into existence to help achieve the community centric approach to responding to incidents. RespondNow project’s focus is less on how to create and maintain the workflow of incidents but more on enabling the community to build reusable runbooks and eventually achieve faster response times or recovery times.

**What is RespondNow?**

It is an open source incident management server that runs on Kubernetes managed by you. It comes with a slack application for collaborating on the incident response. RespondNow is licensed under Apache2.

**RespondNow goals:**

- Build a free and easy to use incident management tool that operates entirely in your slack workspace. Make the collaboration around incident response native to your existing mode of collaboration.

- Bring together a community of developers and SREs that contribute to the buildup of reusable runbooks.

We have announced the availability of the first version of RespondNow with which you can create and manage the incidents using your Kubernetes namespace and your Slack workspace.

Feel free to give it a [try](https://respondnow.github.io/respondnow/getting-started/deploy-rn-server-with-helm/) and provide your feedback through a GitHub issue [here](https://github.com/respondnow/respondnow/issues/new/choose) or through a slack message on our community slack channel [#respond-now](https://app.slack.com/client/T08PSQ7BQ/C07K7TBH4P3) in CNCF Slack.

**How to get started with RespondNow?**

All you need is a Kubernetes namespace that you manage. Follow the documentation [here](https://respondnow.github.io/respondnow/getting-started/deploy-rn-server-with-helm/).

**How to join the RespondNow community?**

Our community is hosted at a slack channel called **#respond-now** on the CNCF Slack workspace. If you are already signed in into the CNCF slack workspace, then go to the channel directly [here](https://app.slack.com/client/T08PSQ7BQ/C07K7TBH4P3), otherwise, sign up to CNCF Slack first [here](https://slack.cncf.io).

**How to report feedback?**

You can create a Github issue [here](https://github.com/respondnow/respondnow/issues/new/choose) or post a slack message on the respond-now channel.

**Do you like this open source project?**

Give a [star](https://github.com/respondnow/respond) on GitHub.
