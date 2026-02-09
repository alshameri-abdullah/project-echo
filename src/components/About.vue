<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
  <div class="flex flex-1 justify-center overflow-y-auto lg:min-h-0">
    <div class="w-full max-w-2xl px-6 py-8 sm:px-8 sm:py-12 lg:py-16">
      <button
        class="group mb-8 flex cursor-pointer items-center gap-1.5 font-mono text-xs tracking-widest text-black/40 uppercase transition-colors hover:text-black/60"
        @click="router.back()"
      >
        <span
          class="inline-block transition-transform group-hover:-translate-x-0.5"
          >&larr;</span
        >
        Back to the experiment
      </button>

      <h1
        class="text-brown-950 mb-6 font-mono text-2xl font-bold tracking-tight sm:text-3xl"
      >
        Project Echo
      </h1>
      <p class="text-brown-800 mb-10 text-sm leading-relaxed sm:text-base">
        Project Echo is a Practice as Research (PaR) investigation focused on
        the social dynamics of anonymous digital environments. The project
        examines how the visibility of collective behaviour&mdash;the
        &ldquo;echoes&rdquo; of past participants&mdash;influences the
        decision-making of individual users in real-time.
      </p>

      <section class="mb-10">
        <h2
          class="text-brown-900 mb-3 font-mono text-lg font-semibold tracking-tight"
        >
          Research Context and Question
        </h2>
        <p class="text-brown-800 text-sm leading-relaxed sm:text-base">
          In digital spaces, the lack of face-to-face social cues and physical
          consequences often alters human interaction. This project investigates
          the psychological shift from individual agency to collective action by
          asking:
          <em class="font-semibold"
            >&ldquo;In what ways does the disclosure of prior interactions
            influence the behaviour of subsequent users toward a virtual
            character?&rdquo;</em
          >
        </p>
      </section>

      <section class="mb-10">
        <h2
          class="text-brown-900 mb-3 font-mono text-lg font-semibold tracking-tight"
        >
          Theoretical Framework
        </h2>
        <p class="text-brown-800 mb-4 text-sm leading-relaxed sm:text-base">
          The research is grounded in three key academic concepts:
        </p>
        <ul
          class="text-brown-800 flex flex-col gap-4 text-sm leading-relaxed sm:text-base"
        >
          <li class="border-brown-300 bg-brown-100 rounded-sm border p-4">
            <a
              href="https://johnsuler.com/article_pdfs/online_dis_effect.pdf"
              target="_blank"
              rel="noopener"
              class="text-brown-900 hover:text-brown-700 underline"
              ><strong>The Online Disinhibition Effect</strong></a
            >
            (Suler, 2004): This explains why people loosen social restraints
            online. The project specifically explores the spectrum between
            benign disinhibition (helping, kindness) and toxic disinhibition
            (aggression, hostility) when participants feel anonymous or
            invisible.
          </li>
          <li class="border-brown-300 bg-brown-100 rounded-sm border p-4">
            <a
              href="https://www.researchgate.net/publication/221517042_Computer_are_social_actors"
              target="_blank"
              rel="noopener"
              class="text-brown-900 hover:text-brown-700 underline"
              ><strong>The CASA Paradigm</strong></a
            >
            (Nass, Steuer &amp; Tauber, 1994): This theory provides the
            rationale for using a virtual subject, as humans mindlessly apply
            real-world social rules and expectations to digital characters.
          </li>
          <li class="border-brown-300 bg-brown-100 rounded-sm border p-4">
            <a
              href="https://www.researchgate.net/profile/Ilknur-Aydogdu-Karaaslan/publication/377628356_EFFECTS_OF_ONLINE_DISINHIBITION_ON_INDIVIDUALS_BEHAVIOR_IN_THE_DIGITAL_WORLD/links/65b0272a6c7ad06ab4261164/EFFECTS-OF-ONLINE-DISINHIBITION-ON-INDIVIDUALS-BEHAVIOR-IN-THE-DIGITAL-WORLD.pdf"
              target="_blank"
              rel="noopener"
              class="text-brown-900 hover:text-brown-700 underline"
              ><strong>The &ldquo;Proximate Public&rdquo;</strong></a
            >
            (Karaaslan &amp; &#x15E;enses, 2024): This concept highlights how
            individuals online form a sense of closeness through shared history.
            The project tests if this shared history causes users to
            &ldquo;collectively respond&rdquo; to the character based on how
            others have treated it previously.
          </li>
        </ul>
      </section>

      <section class="mb-10">
        <h2
          class="text-brown-900 mb-3 font-mono text-lg font-semibold tracking-tight"
        >
          Methodology: Practice as Research (PaR)
        </h2>
        <p class="text-brown-800 mb-4 text-sm leading-relaxed sm:text-base">
          As a PaR project, the creative process of building the digital
          environment is the primary method of inquiry.
        </p>
        <ul
          class="text-brown-800 flex flex-col gap-4 text-sm leading-relaxed sm:text-base"
        >
          <li class="border-brown-300 bg-brown-100 rounded-sm border p-4">
            <strong class="text-brown-900">The Social Ledger:</strong>
            The experimental interface features a real-time display of prior
            actions, acting as a &ldquo;social mirror&rdquo; for the user.
          </li>
          <li class="border-brown-300 bg-brown-100 rounded-sm border p-4">
            <strong class="text-brown-900">The Artifact:</strong>
            A web-based stage where users interact with a digital proxy using
            various tools&mdash;ranging from supportive acts to aggressive acts.
          </li>
          <li class="border-brown-300 bg-brown-100 rounded-sm border p-4">
            <strong class="text-brown-900">Experimental Control:</strong>
            Using a virtual subject ensures every user sees the same visual
            stimulus, providing reliable data while maintaining strict ethical
            safety.
          </li>
        </ul>
      </section>

      <section class="mb-10">
        <h2
          class="text-brown-900 mb-3 font-mono text-lg font-semibold tracking-tight"
        >
          Data Privacy and Ethics
        </h2>
        <ul
          class="text-brown-800 flex flex-col gap-4 text-sm leading-relaxed sm:text-base"
        >
          <li class="border-brown-300 bg-brown-100 rounded-sm border p-4">
            <strong class="text-brown-900">Anonymity:</strong>
            No personally identifiable information (PII), such as names or
            emails, is collected. Your interactions are recorded purely as
            anonymous data points.
          </li>
          <li class="border-brown-300 bg-brown-100 rounded-sm border p-4">
            <strong class="text-brown-900">Nature of the Subject:</strong>
            The central character is a digital avatar. It is a virtual subject
            and does not possess feelings, consciousness, or the capacity for
            physical harm.
          </li>
          <li class="border-brown-300 bg-brown-100 rounded-sm border p-4">
            <strong class="text-brown-900">Voluntary Participation:</strong>
            You are free to leave the site at any time.
          </li>
        </ul>
      </section>

      <section class="mb-12">
        <h2
          class="text-brown-900 mb-3 font-mono text-lg font-semibold tracking-tight"
        >
          Institutional Context
        </h2>
        <ul
          class="text-brown-800 flex flex-col gap-4 text-sm leading-relaxed sm:text-base"
        >
          <li class="border-brown-300 bg-brown-100 rounded-sm border p-4">
            <strong class="text-brown-900">University: </strong>
            <a
              href="https://www.uca.ac.uk/"
              target="_blank"
              rel="noopener"
              class="hover:text-brown-700 underline"
              >University for the Creative Arts (UCA)</a
            >.
          </li>
          <li class="border-brown-300 bg-brown-100 rounded-sm border p-4">
            <strong class="text-brown-900">Course:</strong>
            MSc Human Computer Interaction Farnham 25/26.
          </li>
          <li class="border-brown-300 bg-brown-100 rounded-sm border p-4">
            <strong class="text-brown-900">Module:</strong>
            Research Methods for Creative Technologies (RMfCT).
          </li>
        </ul>
      </section>

      <button
        class="group flex cursor-pointer items-center gap-1.5 font-mono text-xs tracking-widest text-black/40 uppercase transition-colors hover:text-black/60"
        @click="router.back()"
      >
        <span
          class="inline-block transition-transform group-hover:-translate-x-0.5"
          >&larr;</span
        >
        Back to the experiment
      </button>
    </div>
  </div>
</template>
