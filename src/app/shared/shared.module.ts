import { NgModule } from "@angular/core";
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { QuizComponent } from "./quiz/quiz.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [FooterComponent, NavbarComponent, QuizComponent],
    imports: [CommonModule,FormsModule],
    exports: [FooterComponent, NavbarComponent, QuizComponent]
})

export class SharedModule {

}