import { describe, it, expect } from "vitest";
import { doubleAge } from "../src/app";

describe('doubleAge', ()=>{
    it('if daddys age is 36 and sons age is 7, should return 22', () => {
        expect(doubleAge(36, 7)).toBe(22);
    })
})

it('if daddys age is 55 and sons age is 30, should return 5', () => {
    expect(doubleAge(55, 30)).toBe(5);
})

it('if daddys age is 22 and sons age is 1, should return 20', () => {
    expect(doubleAge(22, 1)).toBe(20);
})
it('if daddys age is 29 sons age is 0, should return 20', () => {
    expect(doubleAge(29, 0)).toBe(29);
})

it('if daddys age is 36 and sons age is 7, should return 22', () => {
    
})

