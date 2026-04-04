/**
 * Age Calculator
 * Calculates and displays precise age with real-time updates
 */
export class AgeCalculator {
    constructor(birthDateString) {
        this.birthDate = new Date(birthDateString);
        this.ageElement = document.getElementById('current-age');
        this.intervalId = null;
    }
    /**
     * Start calculating and updating age in real-time
     */
    start() {
        if (!this.ageElement)
            return;
        // Update immediately
        this.updateAge();
        // Update every millisecond for smooth display
        this.intervalId = window.setInterval(() => this.updateAge(), 1);
    }
    /**
     * Stop age calculation
     */
    stop() {
        if (this.intervalId !== null) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }
    /**
     * Calculate and update age display
     */
    updateAge() {
        if (!this.ageElement)
            return;
        const now = new Date();
        const ageInMilliseconds = now.getTime() - this.birthDate.getTime();
        const ageInSeconds = ageInMilliseconds / 1000;
        const ageInYears = ageInSeconds / (365.25 * 24 * 60 * 60);
        this.ageElement.textContent = ageInYears.toFixed(7);
    }
    /**
     * Get current age in years as a number
     */
    getAgeInYears() {
        const now = new Date();
        const ageInMilliseconds = now.getTime() - this.birthDate.getTime();
        const ageInSeconds = ageInMilliseconds / 1000;
        return ageInSeconds / (365.25 * 24 * 60 * 60);
    }
    /**
     * Get age breakdown (years, months, days, etc.)
     */
    getAgeBreakdown() {
        const now = new Date();
        let years = now.getFullYear() - this.birthDate.getFullYear();
        let months = now.getMonth() - this.birthDate.getMonth();
        let days = now.getDate() - this.birthDate.getDate();
        let hours = now.getHours() - this.birthDate.getHours();
        let minutes = now.getMinutes() - this.birthDate.getMinutes();
        let seconds = now.getSeconds() - this.birthDate.getSeconds();
        // Adjust for negative values
        if (seconds < 0) {
            seconds += 60;
            minutes--;
        }
        if (minutes < 0) {
            minutes += 60;
            hours--;
        }
        if (hours < 0) {
            hours += 24;
            days--;
        }
        if (days < 0) {
            const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
            days += prevMonth.getDate();
            months--;
        }
        if (months < 0) {
            months += 12;
            years--;
        }
        return { years, months, days, hours, minutes, seconds };
    }
}
//# sourceMappingURL=age-calculator.js.map