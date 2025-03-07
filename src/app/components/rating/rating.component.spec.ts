import {ComponentFixture, TestBed} from "@angular/core/testing";

import {RatingComponent} from "./rating.component";

describe("RaitingComponent", () => {
	let component: RatingComponent;
	let fixture: ComponentFixture<RatingComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [RatingComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(RatingComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
