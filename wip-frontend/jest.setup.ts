// jest.setup.ts

// Polyfills
// jest.setup.js
import ResizeObserver from "resize-observer-polyfill";

global.ResizeObserver = ResizeObserver;

// Mocks for localStorage and sessionStorage
class LocalStorageMock {
	private storage: Record<string, string> = {};

	get length(): number {
		return Object.keys(this.storage).length;
	}

	clear(): void {
		this.storage = {};
	}

	getItem(key: string): string | null {
		return this.storage[key] || null;
	}

	key(index: number): string | null {
		return Object.keys(this.storage)[index] || null;
	}

	removeItem(key: string): void {
		delete this.storage[key];
	}

	setItem(key: string, value: string): void {
		this.storage[key] = value;
	}
}

global.localStorage = new LocalStorageMock() as unknown as Storage;
global.sessionStorage = new LocalStorageMock() as unknown as Storage;

// Mocks for CSS Modules
jest.mock("*.module.css", () => {
	return {
		default: jest.fn(),
	};
});

// Extend Jest matchers for React Testing Library
import "@testing-library/jest-dom/extend-expect";
