import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from '../services/person.service';
import { RouterModule } from '@angular/router'; // Add RouterModule here

@Component({
  selector: 'app-person-delete',
  standalone: true,
  imports: [RouterModule], // Ensure RouterModule is imported here
  templateUrl: './person-delete.component.html',
})
export class PersonDeleteComponent {
  personId: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private personService: PersonService
  ) {
    this.route.params.subscribe((params) => {
      this.personId = params['id'];
    });
  }

  delete() {
    if (this.personId) {
      this.personService.deletePerson(this.personId).subscribe({
        next: () => {
          alert('Person deleted successfully');
          this.router.navigate(['/list']);
        },
        error: (err: any) => {
          console.error('Error deleting person:', err);
          alert('Failed to delete person');
        },
      });
    }
  }
}
