import React, { useState, useEffect } from "react";

import PublicationCard from "./PublicationCard";

const sideProjects = [
  {
    title: "flipsite",
    abstract: "This website layout!",
    links: [
      {
        link: "/",
        linkName: "website",
      },
      {
        link: "https://github.com/bora-uyumazturk/flip-website",
        linkName: "repo",
      },
    ],
  },
  {
    title: "leading-pharmacy-chain-vax-map (dot) next",
    abstract:
      "A playful redesign of the CVS Coronavirus vaccine appointment page using React, next.js, mapbox, and github-actions for scheduled web scraping.",
    links: [
      {
        link: "https://leading-pharmacy-chain-vax-map.net/",
        linkName: "website",
      },
      {
        link: "https://github.com/bora-uyumazturk/vaccine-availability-ui",
        linkName: "repo",
      },
    ],
  },
  {
    title: "GPT-3 Sandbox",
    abstract:
      "The purpose of this repository is to allow users to quickly create a web demos for their GPT-3 related project ideas using only a few lines of Python. We take care of all the boilerplate front-end code and provide a clean, object-oriented interface to the GPT-3 API, making it quick and easy to start testing out your ideas without requiring any web dev skills whatsoever. For a list of interesting GPT-3 related project (a few of which were created with the help of GPT-3 Sandbox), check out gpt3examples.com",
    links: [
      {
        link: "https://github.com/shreyashankar/gpt3-sandbox",
        linkName: "repo",
      },
    ],
  },
  {
    title: "Mapping England's Tiered Lockdown System",
    abstract:
      "An interactive map examining England's tiered approach to Covid lockdowns.",
    links: [
      {
        link: "https://bora-uyumazturk.github.io/assets/England_covid_map.html",
        linkName: "map",
      },
    ],
  },
  {
    title: "Functional Analysis of Wearable Data",
    abstract:
      "In this project, we sought to extract important features from longitudinal wearable data using various functional data analysis techqniues. The methods we applied, the discrete fourier transform, PCA, nonnegative matrix factorization, and kmeans, were all variants of matrix factorization. We validated these methods on the downstream task of predicting resting heart rate of tracked subjects. We found that applying the DFT to data on a weekly timescale gave the best predictive performance, suggesting that regularity of activity patterns on longer time scales may help explain variation in patient fitness, even after accoutning for average activity levels. Finally, we discuss possible interpretations of different frequency components of the DFT as well as their implications for resting heart rate.",
    links: [
      {
        link:
          "https://bora-uyumazturk.github.io/assets/functional_wearable_analysis.pdf",
        linkName: "paper",
      },
      {
        link: "https://github.com/bora-uyumazturk/functional_wearable_analysis",
        linkName: "repo",
      },
    ],
  },
];

const SideProjects = ({ front }: { front: boolean }) => {
  const [overflow, setOverflow] = useState("overflow-hidden");

  useEffect(() => {
    if (front) {
      setOverflow("overflow-auto");
    } else {
      setOverflow("overflow-hidden");
    }
  }, [front]);

  return (
    <div className={`h-full w-full flex flex-col space-y-4 ${overflow} pr-4`}>
      <div>Side Projects</div>
      {sideProjects.map((p) => {
        return (
          <PublicationCard
            key={p.title}
            title={p.title}
            abstract={p.abstract}
            links={p.links}
          />
        );
      })}
    </div>
  );
};

export default SideProjects;
