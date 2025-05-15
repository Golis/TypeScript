export {}

interface HrManager{
    getAllSalaries (): string []
}

interface ScrumMaster {
    holdScrumMeeeting(): void
}

class Parachuter implements HrManager, ScrumMaster{
    getAllSalaries(): string[] {
        return [];
    }

    holdScrumMeeeting(): void {
        console.log('Holding scrum meeting ...');
    }
}