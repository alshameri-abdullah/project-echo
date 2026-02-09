<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
  <div class="flex flex-1 justify-center overflow-y-auto lg:min-h-0">
    <div class="w-full max-w-2xl px-6 py-8 sm:px-8 sm:py-12 lg:py-16">
      <button
        class="group mb-8 flex items-center gap-1.5 font-mono text-xs tracking-widest text-black/40 uppercase transition-colors hover:text-black/60"
        @click="router.back()"
      >
        <span
          class="inline-block transition-transform group-hover:-translate-x-0.5"
          >&larr;</span
        >
        Back to the experiment
      </button>

      <h1 class="mb-6 font-mono text-2xl font-bold tracking-tight text-brown-950 sm:text-3xl">
        Project Echo
      </h1>
      <p class="mb-10 text-sm leading-relaxed text-brown-800 sm:text-base">
        Project Echo is a Practice as Research (PaR) investigation focused on
        the social dynamics of anonymous digital environments. The project
        examines how the visibility of collective behaviour&mdash;the
        &ldquo;echoes&rdquo; of past participants&mdash;influences the
        decision-making of individual users in real-time.
      </p>

      <section class="mb-10">
        <h2 class="mb-3 font-mono text-lg font-semibold tracking-tight text-brown-900">
          Research Context and Question
        </h2>
        <p class="text-sm leading-relaxed text-brown-800 sm:text-base">
          In digital spaces, the lack of face-to-face social cues and physical
          consequences often alters human interaction. This project investigates
          the psychological shift from individual agency to collective action by
          asking:
          <em
            >&ldquo;In what ways does the disclosure of prior interactions
            influence the behaviour of subsequent users toward a virtual
            character?&rdquo;</em
          >
        </p>
      </section>

      <section class="mb-10">
        <h2 class="mb-3 font-mono text-lg font-semibold tracking-tight text-brown-900">
          Theoretical Framework
        </h2>
        <p class="mb-4 text-sm leading-relaxed text-brown-800 sm:text-base">
          The research is grounded in three key academic concepts:
        </p>
        <ul class="flex flex-col gap-4 text-sm leading-relaxed text-brown-800 sm:text-base">
          <li class="rounded-sm border border-brown-300 bg-brown-100 p-4">
            <strong class="text-brown-900">The Online Disinhibition Effect</strong>
            (Suler, 2004): This explains why people loosen social restraints
            online. The project specifically explores the spectrum between
            benign disinhibition (helping, kindness) and toxic disinhibition
            (aggression, hostility) when participants feel anonymous or
            invisible.
          </li>
          <li class="rounded-sm border border-brown-300 bg-brown-100 p-4">
            <strong class="text-brown-900">The CASA Paradigm</strong>
            (Computers Are Social Actors): This theory provides the rationale
            for using a virtual subject, as humans mindlessly apply real-world
            social rules and expectations to digital characters.
          </li>
          <li class="rounded-sm border border-brown-300 bg-brown-100 p-4">
            <strong class="text-brown-900">The &ldquo;Proximate Public&rdquo;</strong>
            (Karaaslan &amp; &#x15E;enses, 2024): This concept highlights how
            individuals online form a sense of closeness through shared history.
            The project tests if this shared history causes users to
            &ldquo;collectively respond&rdquo; to the character based on how
            others have treated it previously.
          </li>
        </ul>
      </section>

      <section class="mb-10">
        <h2 class="mb-3 font-mono text-lg font-semibold tracking-tight text-brown-900">
          Methodology: Practice as Research (PaR)
        </h2>
        <p class="mb-4 text-sm leading-relaxed text-brown-800 sm:text-base">
          As a PaR project, the creative process of building the digital
          environment is the primary method of inquiry.
        </p>
        <ul class="flex flex-col gap-4 text-sm leading-relaxed text-brown-800 sm:text-base">
          <li class="rounded-sm border border-brown-300 bg-brown-100 p-4">
            <strong class="text-brown-900">The Social Ledger:</strong>
            The experimental interface features a real-time display of prior
            actions, acting as a &ldquo;social mirror&rdquo; for the user.
          </li>
          <li class="rounded-sm border border-brown-300 bg-brown-100 p-4">
            <strong class="text-brown-900">The Artifact:</strong>
            A web-based stage where users interact with a digital proxy using
            various tools&mdash;ranging from supportive acts to aggressive acts.
          </li>
          <li class="rounded-sm border border-brown-300 bg-brown-100 p-4">
            <strong class="text-brown-900">Experimental Control:</strong>
            Using a virtual subject ensures every user sees the same visual
            stimulus, providing reliable data while maintaining strict ethical
            safety.
          </li>
        </ul>
      </section>

      <section class="mb-10">
        <h2 class="mb-3 font-mono text-lg font-semibold tracking-tight text-brown-900">
          Data Privacy and Ethics
        </h2>
        <ul class="flex flex-col gap-4 text-sm leading-relaxed text-brown-800 sm:text-base">
          <li class="rounded-sm border border-brown-300 bg-brown-100 p-4">
            <strong class="text-brown-900">Anonymization:</strong>
            Participation is anonymous to remove the burden of identity, which
            is a significant factor in facilitating online disinhibition.
          </li>
          <li class="rounded-sm border border-brown-300 bg-brown-100 p-4">
            <strong class="text-brown-900">Ethical Safety:</strong>
            The use of virtual characters serves as a digital proxy for social
            interactions, allowing for the study of behaviour without the risk
            of harm to human subjects.
          </li>
          <li class="rounded-sm border border-brown-300 bg-brown-100 p-4">
            <strong class="text-brown-900">Research Integrity:</strong>
            To maintain data accuracy, visual variables like animations are
            carefully managed to ensure they do not unintentionally skew
            participant responses.
          </li>
        </ul>
      </section>

      <section class="mb-12">
        <h2 class="mb-3 font-mono text-lg font-semibold tracking-tight text-brown-900">
          Institutional Context
        </h2>
        <ul class="flex flex-col gap-4 text-sm leading-relaxed text-brown-800 sm:text-base">
          <li class="rounded-sm border border-brown-300 bg-brown-100 p-4">
            <strong class="text-brown-900">University:</strong>
            University for the Creative Arts (UCA).
          </li>
          <li class="rounded-sm border border-brown-300 bg-brown-100 p-4">
            <strong class="text-brown-900">Course:</strong>
            Research Methods for Creative Technologies (RMfCT), 2025/2026
            Academic Year.
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>
