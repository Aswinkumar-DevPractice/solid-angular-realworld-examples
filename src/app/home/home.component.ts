// src/app/home/home.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="min-h-screen bg-gray-100 text-gray-800">
      <header class="bg-white shadow-md sticky top-0 z-10">
        <div class="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 class="text-xl font-bold">🔥 SOLID Principles in Angular</h1>
          <nav class="space-x-4 text-sm">
            <a
              routerLink="/single-responsibility"
              class="hover:text-blue-600 font-medium"
              >S: SRP</a
            >
            <a
              routerLink="/open-closed"
              class="hover:text-blue-600 font-medium"
              >O: OCP</a
            >
            <a
              routerLink="/liskov-substitution"
              class="hover:text-blue-600 font-medium"
              >L: LSP</a
            >
            <a
              routerLink="/interface-segregation"
              class="hover:text-blue-600 font-medium"
              >I: ISP</a
            >
            <a
              routerLink="/dependency-inversion"
              class="hover:text-blue-600 font-medium"
              >D: DIP</a
            >
          </nav>
        </div>
      </header>

      <main class="max-w-4xl mx-auto px-4 py-10">
        <h2 class="text-2xl font-semibold mb-6">Welcome to Angular SOLID Guide</h2>
        <p class="mb-4 text-gray-700 leading-relaxed">
          This project explores <strong>SOLID principles</strong> applied in
          <strong>real-world Angular 20+ applications</strong> using standalone components and services.
        </p>

        <ul class="grid gap-6 mt-8">
          <li
            *ngFor="let principle of solidPrinciples"
            class="p-6 rounded-lg shadow bg-white hover:bg-blue-50 transition"
          >
            <h3 class="text-lg font-bold mb-2">
              <a [routerLink]="principle.route" class="text-blue-600 hover:underline">
                {{ principle.title }}
              </a>
            </h3>
            <p class="text-sm text-gray-600">{{ principle.description }}</p>
          </li>
        </ul>
      </main>
    </div>
  `,
})
export class HomeComponent {
  solidPrinciples = [
    {
      title: 'S — Single Responsibility Principle',
      route: '/single-responsibility',
      description:
        'Each module/class/component should have one reason to change. Example: Fund Transfer logic split across UI, service, validation, and logging.',
    },
    {
      title: 'O — Open/Closed Principle',
      route: '/open-closed',
      description:
        'Software should be open for extension but closed for modification. Example: Notification service with pluggable strategies.',
    },
    {
      title: 'L — Liskov Substitution Principle',
      route: '/liskov-substitution',
      description:
        'Subtypes must be replaceable for base types. Example: BankAccount service extended by Checking/Savings accounts.',
    },
    {
      title: 'I — Interface Segregation Principle',
      route: '/interface-segregation',
      description:
        'Clients should not be forced to depend on methods they do not use. Example: Separate OTP and Password auth services.',
    },
    {
      title: 'D — Dependency Inversion Principle',
      route: '/dependency-inversion',
      description:
        'Depend on abstractions, not concrete implementations. Example: Payment interface with Stripe and PayPal providers.',
    },
  ];
}
